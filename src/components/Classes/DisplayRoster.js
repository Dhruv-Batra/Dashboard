import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import Button from "@material-ui/core/Button";
import UpdateStud from '../Student/UpdateStud'

const useStyles = makeStyles({
  table: {
    width: "97.5vw",
  },
  TableCell: {
    position: "fixed",
  },
});

export default function DisplayRoster(props) {
  const classes = useStyles();
  //   const [searched, setSearched] = useState("");
  //   const [rows, setRows] = useState(props.student);

  //   const requestSearch = (searchedVal) => {
  //     const filteredRows = props.student.filter((row) => {
  //       //return row.name.toLowerCase().includes(searchedVal.toLowerCase());
  //       console.log(row);
  //     });
  //     setRows(filteredRows);
  //   };

  //   const cancelSearch = () => {
  //     setSearched("");
  //     requestSearch(searched);
  //   };

  const[avg,setAvg]=useState(0);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.info.dark,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  if (props.student != null) {
    return (
      <div>
        <SearchBar
          //value={searched}
          placeholder="Search Student"
          //onChange={(searchedVal) => requestSearch(searchedVal)}
          //onCancelSearch={() => cancelSearch()}
          style={
            {
              // margin: "0 auto",
              // maxWidth: 800,
            }
          }
        />
        <TableContainer component={Paper} style={{ height: "400px" }}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Student Name</StyledTableCell>
                <StyledTableCell align="right">Grade Level</StyledTableCell>
                <StyledTableCell align="right">Teacher ID</StyledTableCell>
                <StyledTableCell align="right">Address</StyledTableCell>
                <StyledTableCell align="right">Allergies</StyledTableCell>
                <StyledTableCell align="right">Birthday</StyledTableCell>
                <StyledTableCell align="right">
                  Emergency Contact
                </StyledTableCell>
                <StyledTableCell align="right">Current Grade</StyledTableCell>
                <StyledTableCell align="right">Update Student</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {props.student.map((student, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="left" width="20%">
                    <Typography variant="h6">{student.name
                        ? student.name
                        : "None"}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography variant="h6">
                      {student.gradeLevel
                        ? student.gradeLevel
                        : "None"}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography variant="h6">{student.teacherId
                        ? student.teacherId
                        : "None"}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography variant="h6">{student.address
                        ? student.address
                        : "None"}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography variant="h6">
                      {student.allergies
                        ? student.allergies
                        : "None"}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography variant="h6">{student.birthday}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography variant="h6">
                      {student.emergencyContact && student.emergencyContact.name
                      ? student.emergencyContact.name
                      : "None"}
                      <br />
                      {student.emergencyContact && student.emergencyContact.phoneNumber
                      ? student.emergencyContact.phoneNumber
                      : "None"
                      }
                      <br />
                      {student.emergencyContact && student.emergencyContact.relationship
                      ? student.emergencyContact.relationship
                      : "None"}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography variant="h6">{student.classGrade ? student.classGrade : "none"}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                      <UpdateStud/>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  } else {
    return null;
  }
}
