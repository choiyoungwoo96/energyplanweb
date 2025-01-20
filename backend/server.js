const mariadb = require("mariadb");
const express = require("express");
const cors = require("cors");
const next = require("next");
require("dotenv").config({ path: "./backend/.env" });

const app = next({ dev: true });
const port = 3000;

const pool = mariadb.createPool({
  host: "localhost",
  user: "host",
  password: "wlgh1127",
  database: "energyplanweb",
  connectionLimit: 5,
});

async function connectAccess() {
  let connection;
  try {
    connection = await pool.getConnection();
    console.log("DB 연결에 성공하였습니다.");
  } catch (error) {
    console.error("DB 연결에 실패하였습니다.", error);
  } finally {
    if (connection) connection.release();
  }
}

console.log("HOST : ", process.env.DB_HOST);

app.prepare().then(() => {
  const server = express();
  const handle = app.getRequestHandler(); // Next.js 기본 핸들러

  // Middleware 설정
  server.use(express.json());
  server.use(cors());

  // Next.js 페이지 처리
  server.get("/", (req, res) => {
    return app.render(req, res, "/");
  });

  // DB 연결 테스트 라우트
  server.get("/create", async (req, res) => {
    await connectAccess();
  });

  // Next.js가 모든 요청 처리
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  // 서버 실행
  server.listen(port, () => {});
});
