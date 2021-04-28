const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const logger = require('morgan');
app.use(logger('dev',{
	skip: req => !req.url.endsWith('.html') && req.url.indexOf('.') > -1
}));
// const bodyParser = require('body-parser'); Not used atm

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.static('./public'));

app.get('/', (req, res)=>{
    let car = {
        MakeModel: 'Bmw E60 M5',
        year: 2010,
        nicecar: true,
        imageofcar: "../images/bmwrrr.jpg"
    };
    let car0 = {
        MakeModel: 'Bmw E30 M3',
        year: 1996,
        nicecar: true,
        imageofcar: "../images/e30.jpg"
    };
    let car1 = {
        MakeModel: 'Bmw E92 M3',
        year: 2012,
        nicecar: true,
        imageofcar: "../images/bmww.jpg"
    };
    
	res.render('index', {
        message: 'Hello Wrld!',
        data: [1,2,3,4],
        Model: "E92 M3",
        Make: "Bmw",
        nice: true,
        car: car,
        car0: car0,
        car1: car1,
    });
});

app.get('/cars/:carId', (req, res) => {
    res.send(req.params.carId);
});

app.post('/cars/:carId', (req, res) => {
    res.render('cars',{
        MakeModel : req.body.MakeModel
    })
});

app.listen(port,()=>{
	console.log(`Server running... http://localhost:${port}`);
});