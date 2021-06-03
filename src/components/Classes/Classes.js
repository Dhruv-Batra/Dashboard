//import TeachIdProvider from "./TeachIdContext";
import { useState, useEffect } from "react";
import { TeachIdContext } from "../Teacher/TeachIdContext.js";
import { useContext } from "react";
import DisplayRoster from './DisplayRoster'

export default function Teacher() {

  const[students, setStudents] = useState([]);
  //const { id, setId } = useContext(TeachIdContext);
  
  const call = () => {
    fetch("http://localhost:8080/student/get")
      .then((res) => {
        return res.json();
      })
      .then((obj) => {
        if (obj != null) {
          console.log("API CALL", obj);
          if (obj.length === 0) {
            obj = [{}];
          }
          setStudents(obj);
        } else {
          console.log("Error");
        }
      });
  };

  useEffect(() => {
    call();
  }, []);

  useEffect(()=>{
    console.log(students);
  },[students])

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "lightgray",
        }}
      >
        <h1>Student Roster</h1>
      </div>

      <div
        className="search-button-container"
        style={{ position: "absolute", left: "25%", top: "26%" }}
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
        {students!=[]&&students.length>0  ? (<DisplayRoster student={students}/>) : <div></div>}
      </div>
    </div>
  );
}
