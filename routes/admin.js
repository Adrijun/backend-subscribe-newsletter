var express = require("express");
var router = express.Router();

/* GET Admin */
router.get("/", function (req, res, next) {
  
     res.send(
       "<h1>Hej från admin</h1> <label>Admin</label> <br> <input id='admin' name='admin' type='text'> <br> <label>Password</label><br><input id='password' name='password' type='password'> <button>Logga in</button>"
     );

     if(req.body)

     var admin = Document.getElementById('admin').value
     console.log(admin);

});

// router.get("/admin", function (req, res) {
// res.sendFile("public/admin.html", { root: __dirname });
// });

// //INLOGG

router.get("/users", function (req, res, next) {
  res.send("Hej från admin/users");
});

module.exports = router;
