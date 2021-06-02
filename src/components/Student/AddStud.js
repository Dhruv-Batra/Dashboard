import {useState} from 'react';
import {Button, makeStyles, Grid} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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

export default function AddStud() {

  

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleClick(){
    const studentData = {
        teacherId: "0oG3nsOBuo6UnVYSo4Fc",
        name: "Monica Green",
        gradeLevel: 5,
        birthday: "September 23, 2012",
        address: "222 Sesame St.",
        allergies: null,
        classGrade: 98.4,
        gradeHistory: [95.6, 94.3, 99.4, 98.7, 96.8],
        emergencyContact: {
          name: "Tom Green",
          relationship: "father",
          phoneNumber: "(804) 894-4389",
        },
    };
    fetch("http://localhost:8080/student/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });
  }

  return (
    <div>
    <Button variant="outlined" color="primary" className={classes.root}onClick={handleClickOpen}>
        Add Student
    </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Student</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
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