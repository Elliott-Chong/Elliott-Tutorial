const mysql = require("mysql2");
let connection;
try {
  connection = mysql.createConnection({
    host: "localhost",
    user: "bed_dvd_root",
    password: "pa$$woRD123",
    database: "bed_dvd_db",
  });
  console.log("mysql server connected!");
  //   connection.query('sql statement', ())
  //   connection.query("SELECT * FROM actor LIMIT 3;", (error, result) => {
  //     if (error) {
  //       console.error(error);
  //       return;
  //     }
  //     console.log(result);
  //   });
} catch (error) {
  console.error(error);
}
