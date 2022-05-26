var express = require('express');
var router = express.Router();


// Får användare från datorbas
router.get('/', function(req, res, next) {

  req.app.locals.db.collection('users').find().toArray()
  .then(results =>{

    console.log(results);
    let printUsers = '<div><h2>Våra users</h2>'

    for (user in results){
      printUsers += '<div>' + results[user].username + '<p>' + 'subscribed:' + '</p>' + results[user].subscribe + '</div>'
    }
    printUsers += "</div>"
    res.send(printUsers);
  })
});

// Pushar en ny användare
router.post('/add', function(req,res){
  
  req.app.locals.db.collection('users').insertOne(req.body)
  .then(result => {
    console.log(result);
    res.redirect('/show');
  })

});

module.exports = router;
