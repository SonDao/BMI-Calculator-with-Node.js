const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
// Returns middleware that only parses urlencoded bodies and only looks at requests
// where the Content-Type header matches the type option.
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var BMI = BMIcalc(weight, height);
  // console.log("Your BMI is " + BMI + ".");
  var result = "Your BMI is: " + BMI + ".";
  res.send(result);
})

app.listen(port, function() {
  console.log("server is listening on port " + port);
});

function BMIcalc(weight, height) {
  return (weight / (height * height));
}
