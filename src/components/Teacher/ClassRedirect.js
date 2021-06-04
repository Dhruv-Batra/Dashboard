import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { TeachIdContext } from "./TeachIdContext";
import { useContext } from "react";

export default function ClassRedirect({ teacherId }) {
  const history = useHistory();
  const { id, setId } = useContext(TeachIdContext);

  const handleClick = () => {
    history.push("/classes");
    setId(teacherId);
  };

  console.log(id);

  return <Button onClick={() => handleClick()}>View Roster</Button>;
}
