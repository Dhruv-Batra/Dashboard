import AddTeach from "./AddTeach";
import UpdateTeach from "./UpdateTeach";
import ClassRedirect from "./ClassRedirect";
import TeachIdProvider, { TeachIdContext } from "./TeachIdContext";
import { useState, useEffect } from "react";
import DisplayTeacher from "./DisplayTeacher";

export default function Teacher() {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/teacher/get")
      .then((res) => {
        return res.json();
      })
      .then((obj) => {
        if (obj != null) {
          console.log("API CALL", obj);
          if (obj.length === 0) {
            obj = [
              {
                roomNumber: "304",
                employeeStatus: "Part Time",
                name: "Deborah Pots",
                gradeLevel: "3",
              },
            ];
          }
          console.log("obj below");
          console.log(obj);
          setTeacher(obj);
        } else {
          console.log("Error");
        }
      });
  }, []);

  useEffect(() => {
    console.log(teacher);
  }, [teacher]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "lightgray",
        }}
      >
        <h1>Teacher Directory</h1>
      </div>
      <div
        className="add-button-container"
        style={{ position: "absolute", left: "75%", top: "40%" }}
      >
        <AddTeach />
      </div>

      <div
        className="search-button-container"
        style={{ position: "absolute", left: "25%", top: "40%" }}
      >
        {/* <SearchBar
          placeholder="Search Student"
          onChange={() => console.log("onChange")}
          onRequestSearch={() => console.log("onRequestSearch")}
          style={
            {
              // margin: "0 auto",
              // maxWidth: 800,
            }
          }
        /> */}

        {/* <div>
          <DisplayStudent student={student} />
        </div> */}
      </div>
      <div
        style={{
          top: "40%",
          position: "absolute",
          alignItems: "left",
          marginLeft: "20px",
        }}
      >
        {teacher != [] && teacher.length > 0 ? (
          <DisplayTeacher teacher={teacher} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
