var express = require("express");
var router = express.Router();

/* GET Admin */
router.get("/", function (req, res, next) {
  res.render("admin", { title: "Admin" });

  //   res.send("Hej från admin");
});

router.get/"admin", function(req, res) {
    res.sendFile("public/admin.html", {root: __dirname});
})

//INLOGG

router.get("/users", function (req, res, next) {
  res.send("Hej från admin/users");
});

module.exports = router;
