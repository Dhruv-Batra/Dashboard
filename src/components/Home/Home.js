import { Button, withStyles, Typography, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function Home() {
  const StyledButton = withStyles({
    root: {
      background: "#003c6c", // gradient color l -> r
      borderRadius: 3,
      border: 0,
      color: "#FDC700", // text color
      height: 60,
      width: 400,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
    label: {
      //textTransform: 'capitalize',
      fontSize: "18px",
    },
  })(Button);
  return (
    <div className="main-div">
      <div
        style={{
          padding: "15px",
          backgroundColor: "#003c6c",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          position: "fixed",
          width: "100%",
        }}
      >
        <Typography variant="h5" style={{ color: "#FDC700" }}>
          Thomas Jefferson Elementary
        </Typography>
      </div>

      {/*  */}
      <div
        className="calendar-container"
        style={{ position: "absolute", right: "70%", top: "40%" }}
      >
        <h2>Today's Events</h2>
      </div>
      {/* button container */}
      <div
        className="button-container"
        style={{ position: "absolute", left: "70%", top: "45%" }}
      >
        <div
          className="button-styling"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link to="/teacher" style={{ textDecoration: "none" }}>
            <StyledButton variant="contained" color="white">
              Teacher Directory
            </StyledButton>
          </Link>
          <br />
          <Link to="/student" style={{ textDecoration: "none" }}>
            <StyledButton variant="contained" color="white">
              Student Directory
            </StyledButton>
          </Link>
          <br />
          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <StyledButton variant="contained" color="white">
              Calendar
            </StyledButton>
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
}
