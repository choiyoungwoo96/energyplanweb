const mariadb = require("mariadb");
const express = require("express");
const cors = require("cors");
const next = require("next");
const server = express();
const app = next({ dev: true });
const port = 3001;

server.use(express.json());
server.use(cors());

//mariaDB pool 생성
const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "wlgh1127",
  database: "energyplanweb",
  connectionLimit: 5,
});

// 다른 모든 요청은 Next.js 기본 핸들러로 처리
server.all("*", (req, res) => {
  return handle(req, res);
});

server.get("/create", async (req, res) => {
  async function connectAccess() {
    let connection;
    try {
      connection = await pool.getConnection();
      console.log("db에 성공하였습니다.");
    } catch (error) {
      console.error("db 연결에 실패하였습니다.", error);
    } finally {
      if (connection) connection.release();
    }
  }
  await connectAccess();
});

server.listen(port, () => {});
