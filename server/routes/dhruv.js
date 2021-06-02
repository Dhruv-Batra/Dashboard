var express = require('express');
var router = express.Router();
const db = require('../firebase')
const axios = require('axios');

// router.get('/events', async(req, res) => {
//     const snapshot = await db.collection('events').get();
//     const allEvents = {};
//     snapshot.forEach((doc) => {
//         allEvents[doc.id]=(doc.data());
//     });
//     console.log(allEvents)
//     res.send(allEvents);
// });

// router.get('/get', async(req,res)=> {
//     const snapshot = await db.collection('classes').get();
//     const teachIds=[];
//     var studentList = [];
//     var index = 0;
//     snapshot.forEach((teacher) => {
//         teachIds.push(teacher.id);
//     })
//     recurTeach(teachIds,index, studentList,res);
// })

// async function recurTeach(teachIds,index,studentList,res){
//     if (index >= teachIds.length)
//         return res.send(studentList);
//     let teachSnapshot = await db.collection('classes').doc(teachIds[index]).collection('students').get();
//     teachSnapshot.forEach((student) => {
//         studentList.push(student.data());
//     })
//     recurTeach(teachIds,index+1, studentList,res);
// }

// router.get('/roster', async(req,res) => {
//     let teachSnapshot = await db.collection('classes').doc(req.query.teachId).collection('students').get();
//     var studentList = {};
//     teachSnapshot.forEach((student) => {
//         studentList[student.id]=student.data();
//     })
//     res.send(studentList)
// })

// router.delete('/delete-event', async(req,res) => {
//     await db.collection('events').doc(req.query.eventId).delete();
//     res.sendStatus(200);
// })

// router.post("/move", async (req, res) => {
//     const { studentId, currentTeacherId, targetTeacherId } = req.body;
//     console.log(req.body);
//     const targetStudent = await db
//       .collection("classes")
//       .doc(currentTeacherId)
//       .collection("students")
//       .doc(studentId)
//       .get();
//     const tarData = targetStudent.data();
//     console.log(tarData.name)
//     const data = {
//         name: tarData.name,
//         address: tarData.address,
//         allergies: tarData.allergies,
//         birthday: tarData.birthday,
//         class_grade: tarData.class_grade,
//         grade_history: tarData.grade_history,
//         grade_level: tarData.grade_level,
//         teacherId: tarData.teacherId
//     };
//     const targetTeacher = await db
//       .collection("classes")
//       .doc(targetTeacherId)
//       .collection("students")
//       .doc(targetStudent.id).set(data);

//     const delTargetStudent = db
//       .collection("classes")
//       .doc(currentTeacherId)
//       .collection("students")
//       .doc(studentId)
//     await delTargetStudent.collection()
//     await delTargetStudent.delete();
// })



module.exports = router;