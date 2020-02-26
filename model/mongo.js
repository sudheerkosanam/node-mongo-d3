var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true, useUnifiedTopology: true});
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = {
    "userEmail" : String,
    "userPassword" : String
};
var aadharSchema  = {
    "aadharNumber" : Number,
    "Name" : String
};
var productSchema = {
    'school_state': String,
    'resource_type': String,
    'poverty_level': String,
    'date_posted': String,
    'total_donations': Number,
    'funding_status': String,
    'grade_level': String
};
// create model if not exists.
//module.exports = mongoose.model('userLoginDetails',userSchema);
//module.exports = mongoose.model('aadharCollection',aadharSchema);
module.exports = mongoose.model('products',productSchema);
