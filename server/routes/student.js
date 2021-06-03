var express = require("express");
var router = express.Router();
const db = require("../firebase");

router.get("/get", async (req, res) => {
  const snapshot = await db.collection("classes").get();
  const teachIds = [];
  var studentList = [];
  var index = 0;
  snapshot.forEach((teacher) => {
    teachIds.push(teacher.id);
  });
  recurTeach(teachIds, index, studentList, res);
});

async function recurTeach(teachIds, index, studentList, res) {
  if (index >= teachIds.length) return res.send(studentList);
  let teachSnapshot = await db
    .collection("classes")
    .doc(teachIds[index])
    .collection("students")
    .get();
  teachSnapshot.forEach((student) => {
    studentList.push(student.data());
  });
  recurTeach(teachIds, index + 1, studentList, res);
}

router.post("/add", async (req, res) => {
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
      teacherId,
      emergencyContact,
    });

  console.log("Added document with ID: ", resp.id);
  res.sendStatus(200);
});

router.post("/update", async (req, res) => {
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

router.post("/move", async (req, res) => {
  const { studentId, currentTeacherId, targetTeacherId } = req.body;
  console.log(req.body);
  const targetStudent = await db
    .collection("classes")
    .doc(currentTeacherId)
    .collection("students")
    .doc(studentId)
    .get();
  const tarData = targetStudent.data();
  console.log(tarData.name);
  const data = {
    name: tarData.name,
    address: tarData.address,
    allergies: tarData.allergies,
    birthday: tarData.birthday,
    classGrade: tarData.classGrade,
    gradeHistory: tarData.gradeHistory,
    gradeLevel: tarData.gradeLevel,
    teacherId: tarData.teacherId,
    emergencyContact: tarData.emergencyContact,
  };
  const targetTeacher = await db
    .collection("classes")
    .doc(targetTeacherId)
    .collection("students")
    .doc(targetStudent.id)
    .set(data);

  const delTargetStudent = db
    .collection("classes")
    .doc(currentTeacherId)
    .collection("students")
    .doc(studentId);
  await delTargetStudent.delete();

  res.sendStatus(200);
});

module.exports = router;
