var express = require("express");

var router = express.Router();



/* GET home page. */

router.get("/", function (req, res, next) {

  res.render("mydata", {

    title: "Tejaswi gannamaneni",

    fact: "I love to dance"

  });

});



module.exports = router;