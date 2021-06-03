var express = require("express");
var router = express.Router();
const db = require("../firebase");
const axios = require("axios");

router.get("/get", async (req, res) => {
  const snapshot = await db.collection("events").get();
  const allEvents = [];
  snapshot.forEach((doc) => {
    allEvents.push({...doc.data(), id: doc.id});
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

module.exports = router;
