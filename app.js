var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var mongoOp     =   require("./model/mongo");
var router      =   express.Router();
var methodOverride = require('method-override');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public'));

/*router.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello World"});
});*/

//route() will allow you to use same path for different HTTP operation.
//So if you have same URL but with different HTTP OP such as POST,GET etc
//Then use route() to remove redundant code.

router.route("/products")
    .get(function(req,res){
        var response = {};
        mongoOp.find({},function(err,data){
            // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = {"error" : false,"message" : data};
               // res.jsonp(data);
            }
            res.jsonp(response);
          //  res.jsonp(data);
        });
    })
    .post(function(req,res){
            var db = new mongoOp();
            var response = {};
            // fetch email and password from REST request.
            // Add strict validation when you use this in Production.
           // db.userEmail = req.body.email;
            db.aadharNumber = req.body.aadharnum;
            db.Name = req.body.name;
            // Hash the password using SHA1 algorithm.
            /*db.userPassword =  require('crypto')
                .createHash('sha1')
                .update(req.body.password)
                .digest('base64');*/
            db.save(function(err){
                // save() will run insert() command of MongoDB.
                // it will add new data in collection.
                if(err) {
                    response = {"error" : true,"message" : "Error adding data"};
                } else {
                    response = {"error" : false,"message" : "Data added"};
                }
                res.json(response);
            });
    });

app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");
