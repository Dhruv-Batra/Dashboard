var express = require('express');
var router = express.Router();
const db = require('../firebase')

router.get('/events', async(req, res) => {
    const snapshot = await db.collection('events').get();
    const allEvents = {};
    snapshot.forEach((doc) => {
        allEvents[doc.id]=(doc.data());
    });
    console.log(allEvents)
    res.send(allEvents);
});

router.get('/students', async(req,res)=> {
    const snapshot = await db.collection('classes').get();
    const teachIds=[];
    var studentList = {};
    var index = 0;
    snapshot.forEach((teacher) => {
        teachIds.push(teacher.id);
    })
    recurTeach(teachIds,index, studentList,res);
})

async function recurTeach(teachIds,index,studentList,res){
    if (index >= teachIds.length)
        return res.send(studentList);
    let teachSnapshot = await db.collection('classes').doc(teachIds[index]).collection('students').get();
    teachSnapshot.forEach((student) => {
        studentList[student.id]=student.data();
    })
    recurTeach(teachIds,index+1, studentList,res);
}

module.exports = router;