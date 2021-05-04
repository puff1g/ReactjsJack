const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const logger = require('morgan');
app.use(logger('dev', {
	skip: req => !req.url.endsWith('.html') && req.url.indexOf('.') > -1
}));

const fileupload = require('express-fileupload');
app.use(fileupload({
	limits:{
		filesize: 5 * 1024 * 1024
	}
}));
app.use(express.json());
app.use(express.urlencoded( { extended:true} ));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/public', express.static(__dirname + "/public"));

const mongoose = require("mongoose");
const db = mongoose.connect("mongodb://localhost:27017/CarCollection", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.static('./public'));

require('./routes')(app);



app.listen(port, () => {
	console.log(`Server runnin... http://localhost:${port}`);
});