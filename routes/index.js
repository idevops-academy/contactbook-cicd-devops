var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var contacts=req.app.get('contacts');
  res.render('index',{contacts:contacts});
});

//end point to return all available books
router.get('/contacts', function(req, res, next) {
  var contacts=req.app.get('contacts');
  res.status(200).json(contacts);
});

//end point to search a book by id
router.get('/contacts/:id', function(req, res, next) {
  var contacts=req.app.get('contacts');
  var result= contacts.find(contact => contact.id == req.params.id);
  if(result)
    return res.status(200).json(result);
  res.status(404).send("Sorry, contact not found");
});

/* app health end point. */
router.get('/health', function(req, res, next) {
  return res.status(200).json("I'm Healthy");
});

module.exports = router;
