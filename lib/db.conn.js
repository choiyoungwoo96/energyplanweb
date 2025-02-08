const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: process.env.DB_LIMIT,
});

async function executeQuery(query, params) {
  let connection;
  try {
    connection = await pool.getConnection();
    const result = await connection.query(query, params);
    console.log(result);
    return result;
  } catch (error) {
    console.error("Database query error : ", error);
    "Database query error", error;
    throw error;
  } finally {
    if (connection) connection.release();
    return console.log("데이터베이스 해지되었습니다.");
  }
}

module.exports = {
  executeQuery,
};
