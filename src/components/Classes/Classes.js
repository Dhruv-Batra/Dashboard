import { TeachIdContext } from "../Teacher/TeachIdContext.js";
import { useContext } from "react";

export default function Classes() {
  const { id, setId } = useContext(TeachIdContext);
  //method to delete students
  return <div></div>;
}
