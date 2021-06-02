var express = require("express");
var router = express.Router();
const db = require("../firebase");

router.get("/teachers", async (req, res) => {
  const snapshot = await db.collection("classes").get();
  const classes = {};
  snapshot.forEach((doc) => {
    console.log(doc.data());
    classes[doc.id] = doc.data();
  });

  res.send(classes);
});

router.post("/teacher/add", async (req, res) => {
  const { name, gradeLevel, employeeStatus, roomNumber } = req.body;

  console.log(req.body);

  const resp = await db.collection("classes").add({
    name,
    gradeLevel,
    employeeStatus,
    roomNumber,
  });

  console.log("Added document with ID: ", resp.id);
  res.sendStatus(200);
});

router.post("/student/add", async (req, res) => {
  const {
    teacherId,
    name,
    gradeLevel,
    birthday,
    address,
    allergies,
    classGrade,
    gradeHistory,
    emergencyContact,
  } = req.body;

  console.log(req.body);

  const resp = await db
    .collection("classes")
    .doc(teacherId)
    .collection("students")
    .add({
      name,
      gradeLevel,
      birthday,
      address,
      allergies,
      classGrade,
      gradeHistory,
      emergencyContact,
    });

  console.log("Added document with ID: ", resp.id);
  res.sendStatus(200);
});

router.post("/event/add", async (req, res) => {
  const { date, description, time, title } = req.body;

  console.log(req.body);

  const resp = await db.collection("events").add({
    date,
    description,
    time,
    title,
  });

  console.log("Added document with ID: ", resp.id);
  res.sendStatus(200);
});

router.post("/student/update", async (req, res) => {
  const { studentId, teacherId, field, update } = req.body;
  console.log(req.body);

  const fieldChange = {};

  fieldChange[field] = update;

  const resp = await db
    .collection("classes")
    .doc(teacherId)
    .collection("students")
    .doc(studentId)
    .update(fieldChange);
  res.sendStatus(200);
});

router.post("/teacher/update", async (req, res) => {
  const { teacherId, field, update } = req.body;
  console.log(req.body);

  const fieldChange = {};

  fieldChange[field] = update;

  const resp = await db
    .collection("classes")
    .doc(teacherId)
    .update(fieldChange);
  res.sendStatus(200);
});

module.exports = router;
