import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export default function ClassRedirect() {
  const history = useHistory();

  return (
    <Button onClick={() => history.push("/classes")}>Class Details</Button>
  );
}
