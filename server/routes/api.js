var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/auth/login', function (req, res, next) {
  console.log("req", req.body)
  const { email, password } = req.body
  if (email === "admin@admin.com" && password === "123") {
    res.status(200).json({ accessToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9", refreshToken: "cc67c2dd127790c2f762f92d48c254d08159cbda" })

  } else {
    res.status(401).json({ message: "invalid email or password!" })
  }
});

module.exports = router;
