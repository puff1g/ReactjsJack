const mongoose = require('mongoose');
const { Schema } = mongoose;

const Car = new Schema({
	Brand: {type:String},
	Model: {type:String},
	year: {type:Number},
	driving: {type:Boolean}
});

module.exports = mongoose.model("Car", Car, 'cars');