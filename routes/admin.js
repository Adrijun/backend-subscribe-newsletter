var express = require("express");
var router = express.Router();

/* GET Admin */
router.get("/", function (req, res, next) {
  const loginAdmin = `


        <h1>Hej från admin</h1> 
        
        <label>Admin</label> <br>
        <input id='admin' name='admin' type='text'> <br>
        <label>Password</label><br>
        <input id='password' name='password' type='password'> <br>
        <button onClick= ${login()} >Logga in</button>
        `;

  res.send(loginAdmin);
});

function login() {
  console.log("hej");
}

// router.get("/admin", function (req, res) {
// res.sendFile("public/admin.html", { root: __dirname });
// });

// //INLOGG

router.get("/users", function (req, res, next) {
  res.send("Hej från admin/users");
});

module.exports = router;
