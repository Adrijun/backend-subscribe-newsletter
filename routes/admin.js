var express = require("express");
const { redirect } = require("express/lib/response");
var router = express.Router();

const admin = [
  {
    username: "admin",
    password: "admin",
  },
];

/* GET Admin */
router.get("/", function (req, res, next) {
  let form = `<form action="admin" method="post">

              <h2>Logga in</h2>

              <div><input type="text" name="admin"> admin</div>

              <div><input type="text" name="password"> password</div>

              <div><button type="submit">Spara</div>
              </form>`;

  res.send(form);

  // if username == admin && password == admin

  // redirect to users

  // else

  // redirect to admin
});

router.post("/", function (req, res) {
  //   let admin = { ...req.body };
  res.send(console.log(req.body));
  //   res.redirect("/users");
});

router.get("/users", function (req, res, next) {
  res.send("Hej från admin/users");
});

module.exports = router;
