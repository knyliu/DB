const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root1234",
  database: "classroomSystem",
});

app.post("/create", (req, res) => {
  const serial_num = req.body.serial_num;
  const course_code = req.body.course_code;
  const course_name = req.body.course_name;
  const course_time = req.body.course_time;

  db.query(
    "INSERT INTO course_info (serial_num, course_code, course_name, course_time) VALUES (?, ?, ?, ?)",
    [serial_num, course_code, course_name, course_time],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting values");
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/course_info", (req, res) => {
  db.query("SELECT * FROM course_info", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching data");
    } else {
      res.send(result);
    }
  });
});

app.put("/update/:course_ID", (req, res) => {
  const course_ID = req.params.course_ID;
  const course_time = req.body.course_time;

  db.query(
    "UPDATE course_info SET course_time = ? WHERE course_ID = ?",
    [course_time, course_ID],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error updating data");
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:course_ID", (req, res) => {
  const course_ID = req.params.course_ID;
  db.query("DELETE FROM course_info WHERE course_ID = ?", course_ID, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting data");
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
