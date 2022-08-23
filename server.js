const express = require("express");
const app = express();
const https = require("https");

app.listen(3000, function(){
  console.log("server is running");
});

app.get("/", function(req, res){
  var url = "https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=d14cdbcde3542dc02e09cc37f2106cd2&units=metric";

  https.get(url, function(response){
    console.log(response.statusCode);
    response.on('data', (d) => {
    const weatherData = JSON.parse(d);
    const temp = weatherData.weather[0].icon;
    console.log(temp);
      res.send("<h1>current temp is " + temp + "</h1>");
  });
  });

});
