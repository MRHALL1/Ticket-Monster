var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json()); //
app.use(bodyParser.urlencoded({extended: true}))

var Venue = mongoose.model('Venue', {name: String});
var Event = mongoose.model('Event', {

})

//Connect to Mongo DB
mongoose.connect('mongodb://localhost:27017/ticket-mosnter-db');


//Welcome
app.get('/', function (req, res) {
  Venue.find({}) //Like Select * in MySQL
    .exec(function(err,data){
      res.send("data":data)
    }
  );
  //res.send("Hello World! Welcome to Ticket Master.")
  // TODO: retrieve events from database and send
});

//Retrieving list of venues
app.get('/venue', function (req, res) {
  //res.send("List of venues")
  Venue venue = new Venue();
  venue.name = req.body.name;
  venue.save(function(err, data){
  iff(err)
      console.log(err);
  res.send("message":"Data Successfully Saved!")
  }
)
});


//Creating New Venue
app.post('/venue', function (req, res, next) {
  res.send(req.body);
  // TODO: insert events into database
});

//Update Venue
app.put("/venue/:id", function(req, res){

  Venue.findById({"id": req.params.id})
       .exec(function(err, data) {
            if (data){
              data.name = "Madison Square";
              data.save(function(err){
                  if (!err){
                      res.send("Data was updated!");
                  }
              });
          }
       });
  });

//HTTP Server
app.listen(3000, function (){
  console.log('Listening on Port 3000!');
})
