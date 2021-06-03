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

  const[field,setField] = useState('classGrade');
  const[update, setUpdate] = useState(null);
  const[histSize, setHistSize] = useState(null);


  function handleClick() {
    console.log(field+ " "+update)
    const studentUpdateData = {
      studentId: "054s6w8i15fo11111111",
      teacherId: "iR8tDX6igwp9632a7XtK",
      field: field,
      update: update,
    };
    fetch("http://localhost:8080/student/update", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentUpdateData),
    });
    setField('classGrade')
    setUpdate(null);
    setOpen(false);
  }

  function handleGradeHistChange(e,i){
    if(i===0)
      var temp=[];
    else
      var temp=[...update];
    temp[i]=e;
    setUpdate(temp);
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
        <DialogTitle id="form-dialog-title">Update Teacher Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out the following fields to update student details.
          </DialogContentText>
          <InputLabel>Choose a Field to Modify</InputLabel>
          <Select
            id="field"
            margin="dense"
            value={field}
            onChange={(event) => setField(event.target.value)}
            autoWidth
          >
            <MenuItem value={'classGrade'}>Current Class Grade</MenuItem>
            <MenuItem value={'teacherId'}>Teacher</MenuItem>
            <MenuItem value={'name'}>Name</MenuItem>
            <MenuItem value={'gradeLevel'}>Grade Level</MenuItem>
            <MenuItem value={'gradeHistory'}>Grade History</MenuItem>
            <MenuItem value={'address'}>Address</MenuItem>
            <MenuItem value={'allergies'}>Allergies</MenuItem>
            <MenuItem value={'birthday'}>Birthday</MenuItem>
            {/* <MenuItem value={'ename'}>Emergency Contact Name</MenuItem>
            <MenuItem value={'erel'}>Emergency Contact Relationship</MenuItem>
            <MenuItem value={'ephone'}>Emergecy Contact Phone Number</MenuItem> */}
        </Select>
          {field==='name'?<TextField
            id="name"
            autoFocus
            margin="dense"
            label="Name"
            onChange={(e)=>setUpdate(e.target.value)}
            fullWidth
          />:<div></div> }
          {field==='teacherId'?<TextField
            id="teacherId"
            margin="dense"
            label="Teacher ID"
            onChange={(e)=>setUpdate(e.target.value)}
            fullWidth
          />:<div></div> }
          {(field==='gradeLevel')?<div>
          <br></br>
          <InputLabel>Grade Level</InputLabel>
          <Select
            id="gradeLevelSelector"
            margin="dense"
            defaultValue={0}
            value={update}
            onChange={(event) => setUpdate(event.target.value)}
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
        </div> : <div></div> }
        {field==='gradeHistory'?<div>
          <br></br>
          <InputLabel>Grade Level</InputLabel>
          <Select
            id="gradeLevelSelector"
            margin="dense"
            defaultValue={0}
            value={histSize}
            onChange={(event) => setHistSize(event.target.value)}
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
        
        {[...Array(histSize)].map((x, i) =>
            <div>
                <TextField
                    id='gradeHistory'
                    margin="dense"
                    label={(i===0 ? 'Kindergarten Grade' : "Grade for grade "+i.toString())}
                    onChange={(e)=>handleGradeHistChange(e.target.value,i)}
                    fullWidth
                />
            </div>
        )}

        </div> : <div></div> }

  
        {field==='birthday'? <form className={classes.container} noValidate>
            <TextField
                id="birthday"
                label="Birthday"
                type="date"
                className={classes.textField}
                onChange={(e)=>setUpdate(e.target.value)}
                InputLabelProps={{
                shrink: true,
                }}
            />
        </form> : <div></div> }
        {field==='address' ? <TextField
            id="address"
            margin="dense"
            label="Address"
            onChange={(e)=>setUpdate(e.target.value)}
            fullWidth
          />:<div></div> }
        {field === 'allergies' ? <TextField
            id="allergies"
            margin="dense"
            label="Allergies"
            onChange={(e)=>setUpdate(e.target.value)}
            fullWidth
        /> : <div></div>}
        {field==='classGrade' ? <TextField
            id="classGrade"
            margin="dense"
            label="Current Grade in Class"
            onChange={(e)=>setUpdate(e.target.value)}
            fullWidth
        />:<div></div> }

        {field==='ename'?<TextField
            id="ename"
            margin="dense"
            label="Emergency Contact Name"
            onChange={(e)=>setUpdate(e.target.value)}
            fullWidth
        />:<div></div>}
        {field==='erel'?<TextField
            id="erel"
            margin="dense"
            label="Emergency Contact Relationship"
            onChange={(e)=>setUpdate(e.target.value)}
            fullWidth
        />:<div></div>}
        {field==='ephone'?<TextField
            id="ephone"
            margin="dense"
            label="Emergency Contact Phone"
            onChange={(e)=>setUpdate(e.target.value)}
            fullWidth
        />:<div></div>}
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
