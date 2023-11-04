import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [serial_num, setSerialNum] = useState(0);
  const [course_code, setCourseCode] = useState("");
  const [course_name, setCourseName] = useState("");
  const [course_time, setCourseTime] = useState("");

  const [newCourseTime, setNewCourseTime] = useState("");

  const [courseInfoList, setCourseInfoList] = useState([]);

  const addCourseInfo = () => {
    Axios.post("http://localhost:3001/create", {
      serial_num: serial_num,
      course_code: course_code,
      course_name: course_name,
      course_time: course_time,
    }).then(() => {
      setCourseInfoList([ 
        ...courseInfoList,
        {
          serial_num: serial_num,
          course_code: course_code,
          course_name: course_name,
          course_time: course_time,
        },
      ]);
    });
  };

  const getCourseInfo = () => {
    Axios.get("http://localhost:3001/course_info").then((response) => {
      setCourseInfoList(response.data);
    });
  };

  const updateCourseInfo = (course_ID) => {
    Axios.put(`http://localhost:3001/update/${course_ID}`, {
      course_time: newCourseTime,
    }).then((response) => {
      setCourseInfoList(
        courseInfoList.map((val) => {
          return val.course_ID === course_ID
            ? {
                serial_num: val.serial_num,
                course_code: val.course_code,
                course_name: val.course_name,
                course_time: newCourseTime,
                course_ID: val.course_ID,
              }
            : val;
        })
      );
    });
  };
  

  const deleteCourseInfo = (course_ID) => {
    Axios.delete(`http://localhost:3001/delete/${course_ID}`).then(
      (response) => {
        setCourseInfoList(
          courseInfoList.filter((val) => {
            return val.course_ID !== course_ID;
          })
        );
      }
    );
  };

  return (
    <div className="App">
      <div className="information">
        <label>serial_num:</label>
        <input
          type="number"
          onChange={(event) => {
            setSerialNum(event.target.value);
          }}
        />
        <label>course_code:</label>
        <input
          type="text"
          onChange={(event) => {
            setCourseCode(event.target.value);
          }}
        />
        <label>course_name:</label>
        <input
          type="text"
          onChange={(event) => {
            setCourseName(event.target.value);
          }}
        />
        <label>course_time:</label>
        <input
          type="text"
          onChange={(event) => {
            setCourseTime(event.target.value);
          }}
        />

        <button onClick={addCourseInfo}>Add Course Info</button>
        <div className="courses">
        <button onClick={getCourseInfo}>Show Course Info</button>

        {courseInfoList.map((val, key) => {
          return (
            <div className="course_info" key={key}>
              <div>
                <h3>course_ID: {val.course_ID}</h3>
                <h3>serial_num: {val.serial_num}</h3>
                <h3>course_code: {val.course_code}</h3>
                <h3>course_name: {val.course_name}</h3>
                <h3>course_time: {val.course_time}</h3>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter New Course Time here : Wed. 5-7..."
                  onChange={(event) => {
                    setNewCourseTime(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateCourseInfo(val.course_ID);
                  }}
                >
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteCourseInfo(val.course_ID);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      </div>

    </div>
  );
}

export default App;
