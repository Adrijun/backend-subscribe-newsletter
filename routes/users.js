var express = require('express');
var router = express.Router();


// Pushar en ny användare
router.post('/add', function(req,res){
  res.send('POST')
});

// Får användare från datorbas
router.get('/', function(req, res, next) {
  res.send('GET');
});



module.exports = router;
