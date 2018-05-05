// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Data
// =============================================================
let reservations = [
  {
    uniqueID:'01',
    name: "Allen",
    phoneNumber: "404-400-500",
    email: 'allen@gmail.com'
  },
  {
    uniqueID:'02',
    name: "Susan",
    phoneNumber: "404-500-400",
    email: 'susan@gmail.com'
  },
  {
    uniqueID:'03',
    name: "Eddie",
    phoneNumber: "404-500-600",
    email: 'eddie@gmail.com'
  },
  {
    uniqueID:'04',
    name: "Yoda",
    phoneNumber: "400-400-400",
    email: 'yoda@gmail.com'
  },
  {
    uniqueID:'05',
    name: "Kobe",
    phoneNumber: "400-900-800",
    email: 'kobe@gmail.com'
  },
];

let waitlist = [
  {
    uniqueID:'06',
    name: "Unlucky",
    phoneNumber: "400-100-800",
    email: 'theluckisnotwithme@gmail.com'
  }
];

// Routes
// =============================================================

// Displays all reservations
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Displays all reservations
app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});

// Displays a single reservation, or returns false
app.get("/api/reservations/:reservation", function(req, res) {
  var chosen = req.params.reservation;

  console.log(chosen);

  for (var i = 0; i < reservations.length; i++) {
    if (chosen === reservations[i].name) {
      return res.json(reservations[i]);
    }
  }

  return res.json(false);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});