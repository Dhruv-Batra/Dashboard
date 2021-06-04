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
import UpdateTeach from "./UpdateTeach";
import ClassRedirect from "./ClassRedirect";

const useStyles = makeStyles({
  table: {
    width: "97.5vw",
  },
  TableCell: {
    position: "fixed",
  },
  root: {
    background: "#003c6c", // gradient color l -> r
    borderRadius: 3,
    border: 0,
    color: "#FDC700", // text color
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    fontSize: "18px",
  },
});

export default function DisplayTeacher({ teacher }) {
  const classes = useStyles();
  console.log(teacher);

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

  //const [temp,setTemp] = useState(null);
  if (teacher.length > 0) {
    return (
      <div>
        <h1>Teacher Directory</h1>
        <SearchBar
          //value={searched}
          placeholder="Search Teacher"
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
                <StyledTableCell>Teacher Name</StyledTableCell>
                <StyledTableCell align="right">Grade Level</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Room Number</StyledTableCell>
                <StyledTableCell align="right">
                  Update Information
                </StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {teacher.map((teacher1) => (
                <StyledTableRow
                  key={(Math.random().toString(36) + "00000000000000000").slice(
                    2,
                    12
                  )}
                >
                  <StyledTableCell align="left" width="20%">
                    <Typography variant="h6">{teacher1.name}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography variant="h6">{teacher1.gradeLevel}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography variant="h6">
                      {teacher1.employeeStatus}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography variant="h6">{teacher1.gradeLevel}</Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <UpdateTeach teacherId={teacher1.id} />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <ClassRedirect
                      className={classes.root}
                      teacherId={teacher1.id}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  } else {
    return (
      <div>
        <p>hi</p>
        <p>Could not load teachers.</p>
      </div>
    );
  }
}
