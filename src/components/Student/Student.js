import {
  Button,
  withStyles,
  TextField,
  InputAdornment,
  Card,
  Paper,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SearchBar from "material-ui-search-bar";
import UpdateStud from "./UpdateStud";
import { useState, useEffect } from "react";
import axios from "axios";
import DisplayStudent from "./DisplayStudent";
import AddStud from "./AddStud";
export default function Student() {
  const [student, setStudent] = useState([]);

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
          setStudent(obj);
        } else {
          console.log("Error");
        }
      });
  };

  useEffect(() => {
    call();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "lightgray",
        }}
      >
        <h1>Student Directory</h1>
      </div>
      <div
        className="add-button-container"
        style={{ position: "absolute", left: "75%", top: "40%" }}
      >
        <AddStud />
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
        <DisplayStudent student={student} />
      </div>
    </div>
  );
}
