  express = require("express");
 const ejs = require("ejs");
 const bodyParser = require("body-parser");

 
 
 const app = express();
 
 app.set('view engine', 'ejs');
 
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(express.static("public"));
 



app.get("/", function(req, res){
    res.render("game");});
 app.listen(4000, function() {
     console.log("Server started on port 4000");
   });
