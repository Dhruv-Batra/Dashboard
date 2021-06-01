import { useEffect } from "react";

export default function Abby() {
  useEffect(() => {
    fetch("http://localhost:8080/abby/classes")
      .then((response) => response.json())
      .then((response) => console.log(response));
  }, []);

  return <div></div>;
}
