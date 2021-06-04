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
          height: "372px",

          position: "static",
          alignItems: "center",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

          backgroundImage: `url(https://cdn.discordapp.com/attachments/850080301313163264/850085733922242661/unknown.png)`,
        }}
      >
        {" "}
        <div>
          <h1 style={{ position: "absolute", left: "50%", top: "20%" }}>
            Thomas Jefferson Elementary
          </h1>
          <p
            style={{
              position: "absolute",
              left: "30%",
              top: "30%",
              textAlign: "center",
            }}
          >
            A diverse community of global citizens and lifelong learners who
            lead by example. We believe in the power of positivity, respect, and
            cooperation. We manifest our potential through confidence and work
            ethic.
          </p>
          <br />
          <p
            style={{
              position: "absolute",
              left: "43%",
              top: "40%",
              textAlign: "center",
            }}
          >
            Principal: Camille Cooper | Phone: 434-293-4402 ext. 100 | Email:
            camillecooper@tjes.edu
          </p>{" "}
        </div>
        <div
          className="calendar-container"
          style={{ position: "absolute", right: "70%", top: "55%" }}
        >
          <h2>Today's Events</h2>
        </div>
        <div
          className="button-container"
          style={{ position: "absolute", left: "60%", top: "60%" }}
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
      <div
        style={{
          height: "615px",

          position: "static",
          alignItems: "center",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

          backgroundImage: `url(https://cdn.discordapp.com/attachments/850080301313163264/850087013520375848/unknown.png)`,
        }}
      >
        {" "}
      </div>
    </div>
  );
}
