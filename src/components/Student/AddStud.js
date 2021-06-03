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

const useStyles = makeStyles((theme) => ({
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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function AddStud() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [teacherId, setTeacherId] = useState(null);
  const [name, setName] = useState(null);
  const [gradeLevel, setGradeLevel] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [address, setAddress] = useState(null);
  const [allergies, setAllergies] = useState(null);
  const [classGrade, setClassGrade] = useState(null);
  const [ename, setEName] = useState(null);
  const [erel, setERel] = useState(null);
  const [ephone, setEPhone] = useState(null);


  function handleClick() {
    const studentData = {
      teacherId: teacherId,
      name: name,
      gradeLevel: gradeLevel,
      birthday: birthday,
      address: address,
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
      <Button
        variant="outlined"
        color="primary"
        className={classes.root}
        onClick={handleClickOpen}
      >
        Add Student
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Student</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out the following fields to add a student to the school's
            database.
          </DialogContentText>
          <TextField
            id="name"
            autoFocus
            margin="dense"
            label="Name"
            onChange={(e)=>setName(e.target.value)}
            fullWidth
          />
          <TextField
            id="teacherId"
            autoFocus
            margin="dense"
            label="Teacher ID"
            onChange={(e)=>setTeacherId(e.target.value)}
            fullWidth
          />
          <br></br><br></br>
          <InputLabel>Grade Level</InputLabel>
          <Select
            id="gradeLevelSelector"
            value={gradeLevel}
            onChange={(event) => setGradeLevel(event.target.value)}
            autoWidth
          >
            <MenuItem value={"K"}>K</MenuItem>
            <MenuItem value={"1"}>1</MenuItem>
            <MenuItem value={"2"}>2</MenuItem>
            <MenuItem value={"3"}>3</MenuItem>
            <MenuItem value={"4"}>4</MenuItem>
            <MenuItem value={"5"}>5</MenuItem>
            <MenuItem value={"6"}>6</MenuItem>
        </Select>
        <br></br><br></br>
        <form className={classes.container} noValidate>
            <TextField
                id="birthday"
                label="Birthday"
                type="date"
                className={classes.textField}
                onChange={(e)=>setBirthday(e.target.value)}
                InputLabelProps={{
                shrink: true,
                }}
            />
        </form>
        <TextField
            id="address"
            autoFocus
            margin="dense"
            label="Address"
            onChange={(e)=>setAddress(e.target.value)}
            fullWidth
          />
        <TextField
            id="address"
            autoFocus
            margin="dense"
            label="Address"
            onChange={(e)=>setAddress(e.target.value)}
            fullWidth
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
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
