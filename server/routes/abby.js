var express = require("express");
var router = express.Router();
const db = require("../firebase");

router.get("/classes", async (req, res) => {
  const snapshot = await db.collection("classes").get();
  const classes = {};
  snapshot.forEach((doc) => {
    console.log(doc.data());
    classes[doc.id] = doc.data();
  });

  res.send(classes);
});

module.exports = router;
