var express = require("express");
var router = express.Router();
const db = require("../firebase");

router.get("/get", async (req, res) => {
  const snapshot = await db.collection("classes").get();
  const classes = [];
  snapshot.forEach((doc) => {
    console.log(doc.data());
    classes.push({ ...doc.data(), id: doc.id });
  });

  res.send(classes);
});

router.post("/add", async (req, res) => {
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

router.post("/update", async (req, res) => {
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

router.get("/roster", async (req, res) => {
  console.log(req.query);
  let teachSnapshot = await db
    .collection("classes")
    .doc(req.query.teachId)
    .collection("students")
    .get();
  var studentList = [];
  teachSnapshot.forEach((student) => {
    studentList.push({ ...student.data(), id: student.id });
  });
  res.send(studentList);
});

module.exports = router;
