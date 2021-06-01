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

module.exports = router;