const express = require("express");
const mongodb = require("mongodb");
const url = require("../url");
//making mongo client
const mcl = mongodb.MongoClient;
//making router instance
const router = express.Router();
//create REST API
router.get("/", (req, res) => {
  mcl.connect(url, (err, conn) => {
    if (err) console.log("Error in db connection: ", err);
    else {
      let db = conn.db("nodedb");
      db.collection("products")
        .find()
        .toArray((err, array) => {
          if (err) console.log("Error:- ", err);
          else {
            console.log("Data Sent");
            res.json(array);
            conn.close();
          }
        });
    }
  });
});

//export router
module.exports = router;
