var express = require("express");
var router = express.Router();
var no1;
var acosh;
var tan;
var log1p;
var sqrt;
/* GET users listing. */

router.get("/", function (req, res, next) {
  no1 = Math.random() * (100 - 1) + 1;
  n2 = Math.random() * (100 - 1) + 1;

  acosh = Math.acosh(no1);

  tan = Math.tan(no1);

  log1p = Math.log1p(no1);

  sqrt = Math.sqrt(no1)

  res.send(`(acosh) to (${no1}) is ${acosh} <br>

            (tan)  to (${no1}) is ${tan} <br>

            (log1p)  to (${no1}) is ${log1p}

            (sqrt) to (${no1}) is ${sqrt}`);
});

module.exports = router;