import React, { useEffect, useState } from "react";
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
          setEvent(obj);
        } else {
          console.log("Oops.");
        }
      });
  };
  useEffect(() => {
    getEvents();
  }, []);
  //function to add events
  // functio to delete events
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
      padding: "0 30px",
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
                      </Box>
                    </Typography>

                    <br />
                    <Typography variant="h5">{event.time}</Typography>

                    <br />
                    <Typography variant="h6">{event.title}</Typography>

                    <br />
                    <Typography variant="h6">{event.description}</Typography>
                    <RiDeleteBinLine
                      onClick={() => console.log("clicked delte")}
                    />
                    <RiEditBoxLine
                      onClick={() => console.log("clicked edit")}
                    />
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
