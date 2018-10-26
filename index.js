var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response1) {
   
   request.get({url: "http://vg-inv.us-east-1.elasticbeanstalk.com:8080/dashboard"}, function(error, response2, body) { 
          if (!error && response2.statusCode == 200) { 
                response1.json(body); 
          } 
   }); 
})


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
