import React, { useEffect, useState, useContext } from "react";
import {
  Button,
  withStyles,
  TextField,
  InputAdornment,
  Card,
  Paper,
  Grid,
  Typography,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { RiEditBoxLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import AddEvent from "./AddEvent";
import UpdateEvent from "./UpdateEvent";
import { UpdaterContext } from "./Updater";

export default function Calendar() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 300,
      width: 250,
      backgroundColor: "#FDC700",
      margin: 40,
      marginBottom: 20,
      marginLeft: 67,
      textAlign: "center",
      paddingTop: 50,
      lineHeight: 2,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
  const [event, setEvent] = useState([]);
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const { update, setUpdate } = useContext(UpdaterContext);

  // DATE SORT

  const compareDate = (a, b) => {
    let dateA = a.date,
      dateB = b.date;
    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    if (dateA === dateB) {
      //Dates are equal, do a time sort
      let timeA = a.time,
        timeB = b.time;
      let merA = a.meridiem,
        merB = b.meridiem;

      // switch it to military time
      if (timeA.toString() === "12") {
        console.log("timeA === 12");
        if (merA === "am") {
          merA = "pm";
        }
        if (merA === "pm") {
          merA = "am";
        }
        console.log("switched")
      }

      if (timeB.toString() === "12") {
        console.log("timeB === 12");
        if (merB === "am") {
          merB = "pm";
        }
        if (merB === "pm") {
          merB = "am";
        }
        console.log("switched")
      }
      console.log(a.title, merA, merB, "times", timeA, timeB)
      // ^ necessary because 12pm is Noon, not Midnight



      if (merA === "am") {
        timeA = timeA * 100;
      } else {
        timeA = timeA + 12;
        timeA = timeA * 100;
      }

      if (merB === "am") {
        timeB = timeB * 100;
      } else {
        timeB = timeB + 12;
        timeB = timeB * 100;
      }

      if (timeA < timeB) {
        return -1;
      }
      if (timeA > timeB) {
        return 1;
      }
      return 0;
    }
    return 0;
  }

  function sortDate(events) {
    let newArray = events.sort(compareDate);
    setEvent([...newArray]);
  }

  // function to get events
  // GET all events

  const getEvents = () => {
    fetch("http://localhost:8080/events/get")
      .then((res) => {
        return res.json();
      })
      .then((obj) => {
        if (obj != null) {
          console.log("API CALL", obj);
          if (obj.length === 0) {
            obj = [{ volumeInfo: { title: "Book not found.", authors: [""] } }];
          }
          // setEvent(obj);
          // console.log("before sort", event);
          sortDate(obj);
          console.log("after sort", event);
        } else {
          console.log("Oops.");
        }
      });
  };
  useEffect(() => {
    getEvents();
    console.log("update", update);
  }, [update]);
  //function to add events - DONE



  // function to delete events - DONE (check onclick of the delete icon)

  // function to update events

  //useStyles

  const StyledCard = withStyles({
    root: {
      background: "linear-gradient(45deg, #FDC700 30%, #FDC700 90%)", // gradient color l -> r
      borderRadius: 3,
      width: 200,
      border: 0,
      color: "black", // text color
      height: 300,
      padding: "0 30px 30px 0",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      display: "flex",
      flexDirection: "row",
    },
    label: {
      //textTransform: 'capitalize',
    },
  })(Card);

  return (
    // display events

    // <div>
    //   {event.map((event, index) => (
    //     <div>
    //       <StyledCard>{event.title}</StyledCard>
    //     </div>
    //   ))}
    // </div>
    <div classname="big-boi-div">

      <br /> <br /> <br /> <br />
      <AddEvent setUpdate={setUpdate} />

      <div className="card-container">
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="left" spacing={spacing}>
              {event.map((event, index) => (
                <Grid key={index} event>
                  <Paper className={classes.paper}>
                    <Typography variant="h4">
                      <Box fontWeight="fontWeightBold" m={1}>
                        {event.date}
                        {console.log(event.id)}
                      </Box>
                    </Typography>

                    <br />
                    <Typography variant="h5">{event.time + " " + event.meridiem}</Typography>

                    <br />
                    <Typography variant="h6">{event.title}</Typography>

                    <br />
                    <Typography variant="h6">{event.description}</Typography>
                    <RiDeleteBinLine
                      onClick={() =>
                        fetch("http://localhost:8080/events/delete", { method: 'DELETE', headers: { "Accept": "application/json", "Content-Type": "application/json", }, body: JSON.stringify({ "id": event.id }) })
                          // .then((res) => {
                          //     return res.json();
                          // })
                          .then((obj) => {
                            console.log("deleting", obj);
                            setUpdate(Math.random());
                          })
                      }
                    />
                    {/* <RiEditBoxLine
                      onClick={() => console.log("clicked edit")}
                    /> */}
                    <UpdateEvent title={event.title} id={event.id} />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
