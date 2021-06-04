import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { TeachIdContext } from "./TeachIdContext";
import { useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "#003c6c", // gradient color l -> r
    borderRadius: 3,
    border: 0,
    color: "#FDC700", // text color
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    fontSize: "18px",
  },
});

export default function ClassRedirect({ teacherId }) {
  const classes = useStyles();
  const history = useHistory();
  const { id, setId } = useContext(TeachIdContext);

  const handleClick = () => {
    history.push("/classes");
    setId(teacherId);
  };

  console.log(id);

  return <Button 
    onClick={() => handleClick()}
    className={classes.root}
    >View Roster</Button>;
}
