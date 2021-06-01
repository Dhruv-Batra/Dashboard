import { Button, withStyles, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function Home() {
  const StyledButton = withStyles({
    root: {
      background: "#0FC47A", // gradient color l -> r
      borderRadius: 3,
      border: 0,
      color: "black", // text color
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
    <div className="main-div">
    <div className="tj-logo" style={{display:"flex", justifyContent:"center", paddingTop: "25px"}}>
    <img src="./images/thomas-jefferson.png" alt="thomas jefferson logo" height="200px" width="200px"/>
    </div>
    <div style={{display:"flex", justifyContent:"center"}}>
    <h1>Thomas Jefferson Elementary Dashboard</h1>
    <br/>
    </div>

    <div className="calendar-container" style={{position:"absolute", right: '70%', top: "45%"}}>
        <h2>Today's Events</h2>
    </div>
    {/* button container */}
    <div className = "button-container" style={{position:"absolute", left: '60%', top: "55%"}}>
        <div className="button-styling" style={{display: "flex", flexDirection: "column", alignItems: "center"  }}>
      <Link to="/page" style={{ textDecoration: "none"}}>
        <StyledButton variant="contained" color="#0FC47A">
          Teacher Directory
        </StyledButton>
      </Link>
      <br/>
      <Link to="/page" style={{ textDecoration: "none" }}>
        <StyledButton variant="contained" color="#0FC47A">
          Student Directory
        </StyledButton>
      </Link>
      <br/>
      <Link to="/page" style={{ textDecoration: "none" }}>
        <StyledButton variant="contained" color="#0FC47A">
          Calendar
        </StyledButton>
      </Link>
      <br/>
      </div>
      </div>
    </div>
  );
}
