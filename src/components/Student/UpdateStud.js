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

export default function UpdateStud({ studentName, studentId, teacherId }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [field, setField] = useState("name");
  const [update, setUpdate] = useState();

  console.log(teacherId);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleClick() {
    const studentUpdatedData = {
      teacherId,
      studentId,
      field,
      update,
    };

    fetch("http://localhost:8080/student/update", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentUpdatedData),
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
        Update
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Update Student Database
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out the following fields to update {studentName}'s details.
          </DialogContentText>

          <InputLabel>Field</InputLabel>
          <Select
            id="fieldSelector"
            value={field}
            onChange={(event) => setField(event.target.value)}
            autoWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="address">Address</MenuItem>
            <MenuItem value="allergies">Allergy Information</MenuItem>
            <MenuItem value="birthday">Birthday</MenuItem>
            <MenuItem value="classGrade">Current Class Grade</MenuItem>
            <MenuItem value="gradeLevel">Grade Level</MenuItem>
            <MenuItem value="emergencyContact">Emergency Contacts</MenuItem>
            <MenuItem value="gradeHistory">Grade History</MenuItem>
          </Select>
        </DialogContent>

        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Update"
          fullWidth
          onChange={(event) => setUpdate(event.target.value)}
        />

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClick} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
