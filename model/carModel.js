const mongoose = require('mongoose');
const { Schema } = mongoose;

const Car = new Schema({
	Brand: {type:String},
	Model: {type:String},
	year: {type:Number},
	driving: {type:Boolean}
}, {
	versionKey: false,
});

module.exports = mongoose.model("Car", Car, 'cars');