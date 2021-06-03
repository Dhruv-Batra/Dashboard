import React, { useState, useContext } from "react";
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
import { UpdaterContext } from "./Updater";
import { RiEditBoxLine } from "react-icons/ri";

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

export default function UpdateEvent(props) {
    // props: id, title
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    //date, description, meridiem, time, title
    const [date, setDate] = useState();
    const [meridiem, setMeridiem] = useState();
    const [time, setTime] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const { update, setUpdate } = useContext(UpdaterContext);
    //const [id, setId] = useState();
    console.log("event ID", props.id);
    console.log("event Title", props.title);
    const id = props.id;
    console.log("const id", id);

    const [field, setField] = useState("name");
    const [localUpdate, setLocalUpdate] = useState();


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleClick() {
        console.log("blahblahblah????")
        const eventUpdatedData = {
            date,
            meridiem,
            time,
            title,
            description,
        };
        console.log("eventUpdate", eventUpdatedData);
        if (eventUpdatedData)
        
        fetch("http://localhost:8080/events/update", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"date": date, "meridiem": meridiem, "time": time, "title": title, "description": description, "id": props.id}),
        });
        setUpdate(Math.random());
        console.log(update);
        setOpen(false);
    }

    return (
        <div>
            {/* <Button
                variant="outlined"
                color="primary"
                className={classes.root}
                onClick={handleClickOpen}
            >
                Add Event
      </Button> */}
            <RiEditBoxLine
                onClick={handleClickOpen}
            />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Update Event</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill out any fields you wish to update for the {props.title} event.
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="date"
                        label="Date (mm/dd/yyyy)"
                        fullWidth
                        onChange={(event) => setDate(event.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        fullWidth
                        onChange={(event) => setTitle(event.target.value)}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        fullWidth
                        onChange={(event) => setDescription(event.target.value)}
                    />

                    <InputLabel>Time</InputLabel>
                    <Select
                        id="timeSelector"
                        value={time}
                        onChange={(event) => setTime(event.target.value)}
                        autoWidth
                    >
                        {/* <MenuItem value="">
                            <em>None</em>
                        </MenuItem> */}
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        <MenuItem value="6">6</MenuItem>
                        <MenuItem value="7">7</MenuItem>
                        <MenuItem value="8">8</MenuItem>
                        <MenuItem value="9">9</MenuItem>
                        <MenuItem value="10">10</MenuItem>
                        <MenuItem value="11">11</MenuItem>
                        <MenuItem value="12">12</MenuItem>
                    </Select>

                    <InputLabel>AM or PM?</InputLabel>
                    <Select
                        id="meridiemSelector"
                        value={meridiem}
                        onChange={(event) => setMeridiem(event.target.value)}
                        autoWidth
                    >
                        {/* <MenuItem value={""}>
                            <em>None</em>
                        </MenuItem> */}
                        <MenuItem value={"am"}>am</MenuItem>
                        <MenuItem value={"pm"}>pm</MenuItem>
                    </Select>

                    {/* <TextField
                        autoFocus
                        margin="dense"
                        id="room number"
                        label="Room Number"
                        fullWidth
                        onChange={(event) => setRoomNumber(event.target.value)}
                    /> */}
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