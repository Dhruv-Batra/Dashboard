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

  const [teacherId, setTeacherId] = useState('archives');
  const [name, setName] = useState("Not Specified");
  const [gradeLevel, setGradeLevel] = useState("Not Specified");
  const [birthday, setBirthday] = useState("Not Specified");
  const [address, setAddress] = useState("Not Specified");
  const [allergies, setAllergies] = useState("Not Specified");
  const [classGrade, setClassGrade] = useState("Not Specified");
  const [gradeHistory, setGradeHistory] = useState([]);
  const [ename, setEName] = useState("Not Specified");
  const [erel, setERel] = useState("Not Specified");
  const [ephone, setEPhone] = useState("Not Specified");


  function handleClick() {
    const studentData = {
      teacherId: teacherId,
      name: name,
      gradeLevel: gradeLevel,
      birthday: birthday,
      address: address,
      allergies: allergies,
      classGrade: classGrade,
      gradeHistory: gradeHistory,
      emergencyContact: {
        name: ename,
        relationship: erel,
        phoneNumber: ephone,
      },
    };
    console.log(gradeHistory);
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
            margin="dense"
            label="Teacher ID"
            onChange={(e)=>setTeacherId(e.target.value)}
            fullWidth
          />
          <br></br><br></br>
          <InputLabel>Grade Level</InputLabel>
          <Select
            id="gradeLevelSelector"
            margin="dense"
            value={gradeLevel}
            onChange={(event) => setGradeLevel(event.target.value)}
            autoWidth
          >
            <MenuItem value={0}>K</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
        </Select>
        {[...Array(gradeLevel)].map((x, i) =>
            <TextField
                id='gradeHistory'
                margin="dense"
                label={i.toString()}
                onChange={(e)=>setGradeHistory([...gradeHistory, e.target.value])}
                fullWidth
            />
        )}
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
            margin="dense"
            label="Address"
            onChange={(e)=>setAddress(e.target.value)}
            fullWidth
          />
        <TextField
            id="allergies"
            margin="dense"
            label="Allergies"
            onChange={(e)=>setAllergies(e.target.value)}
            fullWidth
        />
        <TextField
            id="classGrade"
            margin="dense"
            label="Current Grade"
            onChange={(e)=>setClassGrade(e.target.value)}
            fullWidth
        />
        <TextField
            id="ename"
            margin="dense"
            label="Emergency Contact Name"
            onChange={(e)=>setEName(e.target.value)}
            fullWidth
        />
        <TextField
            id="erel"
            margin="dense"
            label="Emergency Contact Relationship"
            onChange={(e)=>setERel(e.target.value)}
            fullWidth
        />
        <TextField
            id="ephone"
            margin="dense"
            label="Emergency Contact Phone"
            onChange={(e)=>setEPhone(e.target.value)}
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
