var express = require("express");
var router = express.Router();
const db = require("../firebase");
const axios = require("axios");

router.get("/get", async (req, res) => {
  const snapshot = await db.collection("events").get();
  const allEvents = [];
  snapshot.forEach((doc) => {
    allEvents.push({ ...doc.data(), id: doc.id });
  });
  console.log(allEvents);
  res.send(allEvents);
});

router.delete("/delete", async (req, res) => {
  await db.collection("events").doc(req.body.id).delete();
  res.sendStatus(200);
});

router.post("/add", async (req, res) => {
  const { date, description, time, title, meridiem } = req.body;

  console.log(req.body);

  const resp = await db.collection("events").add({
    date,
    description,
    time,
    title,
    meridiem,
  });

  console.log("Added document with ID: ", resp.id);
  res.sendStatus(200);
});

router.post("/update", async (req, res) => {
  const { date, meridiem, time, title, description, id } = req.body;
  console.log("starting update");
  console.log("body:", req.body);
  // og: eventId, field, update
  //   date,
  //   meridiem,
  //   time,
  //   title,
  //   description,

  const fieldChange = {};

  if(date){
    fieldChange["date"] = date;
  }
  if(meridiem){
    fieldChange["meridiem"] = meridiem;
  }
  if(time){
    fieldChange["time"] = time;
  }
  if(title){
    fieldChange["title"] = title;
  }
  if(description){
    fieldChange["description"] = description;
  }
  console.log("fieldChange", fieldChange);
  //fieldChange[field] = update;
  console.log(id); // event id is now not undefined

  const resp = await db
    .collection("events")
    .doc(id)
    .update(fieldChange);
  res.sendStatus(200);
});


module.exports = router;
