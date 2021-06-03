import { useState } from "react";
import { Button, makeStyles, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles({
  root: {
    background: "#003c6c", // gradient color l -> r
    borderRadius: 3,
    border: 0,
    color: "#FDC700", // text color
    height: 60,
    width: 400,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    fontSize: "18px",
  },
});

export default function AddTeach() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [gradeLevel, setGradeLevel] = useState("K");
  const [roomNumber, setRoomNumber] = useState();
  const [employeeStatus, setEmployeeStatus] = useState("full time");

  console.log(gradeLevel);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleClick() {
    const teacherData = {
      name: { name },
      employeeStatus: { employeeStatus },
      roomNumber: { roomNumber },
      gradeLevel: { gradeLevel },
    };

    fetch("http://localhost:8080/teacher/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teacherData),
    });

    setOpen(false);
  }

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        className={classes.root}
        onClick={handleClickOpen}
      >
        Add Teacher
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Teacher</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out the following fields to add a student to the school's
            database.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            onChange={(event) => setName(event.target.value)}
          />

          <InputLabel>Employee Status</InputLabel>
          <Select
            id="employeeStatusSelector"
            value={employeeStatus}
            onChange={(event) => setEmployeeStatus(event.target.value)}
            autoWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="full time">Full Time</MenuItem>
            <MenuItem value="part time">Part Time</MenuItem>
          </Select>

          <InputLabel>Grade Level</InputLabel>
          <Select
            id="gradeLevelSelector"
            value={gradeLevel}
            onChange={(event) => setGradeLevel(event.target.value)}
            autoWidth
          >
            <MenuItem value={""}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={"K"}>K</MenuItem>
            <MenuItem value={"1"}>1</MenuItem>
            <MenuItem value={"2"}>2</MenuItem>
            <MenuItem value={"3"}>3</MenuItem>
            <MenuItem value={"4"}>4</MenuItem>
            <MenuItem value={"5"}>5</MenuItem>
          </Select>

          <TextField
            autoFocus
            margin="dense"
            id="room number"
            label="Room Number"
            fullWidth
            onChange={(event) => setRoomNumber(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClick} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
