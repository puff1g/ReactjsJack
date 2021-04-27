const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const logger = require('morgan');
app.use(logger('dev',{
	skip: req => !req.url.endsWith('.html') && req.url.indexOf('.') > -1
}));

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.static('./public'));

app.get('/', (req, res)=>{
    let car = {
        MakeModel: 'Bmw E60 M5',
        year: 2010,
        nicecar: true,
    };
	res.render('index', {
        message: 'Hello Wrld!',
        data: [1,2,3,4],
        Model: "E92 M3",
        Make: "Bmw",
        nice: true,
        car: car,
    });
});



app.listen(port,()=>{
	console.log(`Server running... http://localhost:${port}`);
});