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
      fontSize: "18px"
    },
  })(Button);
  return (
    <div className="main-div" >
      <div style={{ padding: "15px", backgroundColor: "#003c6c", display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <Typography variant="h5" style={{color:"#FDC700"}}>Thomas Jefferson Elementary</Typography>
      </div>
      <div className="tj-logo" style={{ display: "flex", justifyContent: "center", paddingTop: "25px" }}>
        <img src="./images/thomas-jefferson.png" alt="thomas jefferson logo" height="200px" width="200px" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Thomas Jefferson Elementary Dashboard</h1>
        <br />
      </div>

      {/*  */}
      <div className="calendar-container" style={{ position: "absolute", right: '70%', top: "45%" }}>
        <h2>Today's Events</h2>
      </div>
      {/* button container */}
      <div className="button-container" style={{ position: "absolute", left: '60%', top: "55%" }}>
        <div className="button-styling" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Link to="/teacher" style={{ textDecoration: "none" }}>
            <StyledButton variant="contained" color="primary">
              Teacher Directory
        </StyledButton>
          </Link>
          <br />
          <Link to="/student" style={{ textDecoration: "none" }}>
            <StyledButton variant="contained" color="primary">
              Student Directory
        </StyledButton>
          </Link>
          <br />
          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <StyledButton variant="contained" color="primary">
              Calendar
        </StyledButton>
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
}
