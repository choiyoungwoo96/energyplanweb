const mariadb = require("mariadb");
const express = require("express");
const cors = require("cors");
const port = 3001;
const app = express();
app.use(express.json());
app.use(cors());

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "wlgh1127",
  database: "energyplanweb",
  connectionLimit: 5,
});

app.get("/data", (req, res) => {
  res.json({ message: "hello from node.js Backend" });
});

app.get("/create", async (req, res) => {
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

app.listen(port, () => {});
