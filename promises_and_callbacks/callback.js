const mysql = require("mysql2");
const util = require("util");

connection = mysql.createConnection({
  host: "localhost",
  user: "bed_dvd_root",
  password: "pa$$woRD123",
  database: "bed_dvd_db",
});

// util.promisify converts a callback based function into a promise based function

const query = util.promisify(connection.query).bind(connection);

const fetchData = async function () {
  try {
    const response = await query("SELECT * FROM actor LIMIT 3;");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

fetchData();

// query("SELECT * FROM actor LIMIT 3;").then((data) => {
//   console.log(data);
// }).catch(error=>{
//     console.log(error)
// })

// connection.query("SELECT * FROM actor LIMIT 3;", (error, result) => {
//     if (error) {
//       console.error(error);
//       return;
//     }
//     console.log(result);
//   });
