import { Typography } from "@material-ui/core";
export default function DisplayStudent(props) {
  console.log("DisplayStudent", props.student);

  if (props.student != null) {
    return (
      // <div>
      //     Students is not null.
      // </div>
      <div
        style={{
          height: "300px",
          width: "50%",
          top: "50%",
          left: "50%",
          right: "50%",
          position: "absolute",
          overflowY: "scroll",
        }}
      >
        {props.student.map((student) => (
          <div>
            <div
              style={{
                backgroundColor: "#fadfca",
                width: "50%",
                // marginLeft: "auto",
                // marginRight: "auto",
                margin: "auto",
                padding: "10px",
                borderRadius: "15px",
              }}
            >
              <Typography variant="h5">{student.name}</Typography>
            </div>

            <br />
          </div>
        ))}{" "}
        <br />
      </div>
    );
  } else {
    return null;
  }
}
