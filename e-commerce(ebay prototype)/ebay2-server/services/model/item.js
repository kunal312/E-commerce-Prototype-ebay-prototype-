

var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var connection = require('../connectmongoose');


var tempConn = connection.exportConnection();
connection.sendBackConnection(tempConn);



//Schema for New User Registration

var itemSchema = new Schema({
	email: {type: String},
	itemname: {type: String},
	itemdescription: {type: String},
	itemprice: {type: Number},
	itemremqty: {type: Number},
	itemtotalqty:{type: Number},
	sellerlocation:  {type: String},
	sellername:  {type: String},
	bidprice: {type: Number},
	biduser: {type: String},
	bidstartdate:{type: Date},
	bidexpirydate: {type: Date},
	forbid:{type: Boolean, default:false},

	
});




var Item = tempConn.model('Item', itemSchema);

exports.Item = Item;
