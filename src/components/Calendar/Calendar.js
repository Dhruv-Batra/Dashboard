import { useEffect } from "react";

export default function Calendar() {
  // function to get events
  // GET all events
  const getEvents = () => {
    fetch("http://localhost:8080/events/get")
      .then((response) => response.json())
      .then((resp) => {
        console.log(resp);
      });
  };
  useEffect(() => {
    getEvents();
  }, []);
  //function to add events
  // functio to delete events
  // function to update events
  return (
    // display events

    <div></div>
  );
}
