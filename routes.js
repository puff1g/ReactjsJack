const Car = require('./model/carModel');

module.exports = (app)=>{

	app.get('/',  async (req, res) => {

		let cars = await Car.find();

		let car = {
			Brand: 'test',
			Model: 'derp',
			year: 123,
			driving: true,
		};
		res.render('index', {
			title: 'Hello Wrld - Programming!',
			message: 'Hello Wrld',
			data: [1, 2, 3, 4, 5, 6],
			car,
			cars
		});
	});
	
	app.get('/cars/:carId', (req, res)=>{
		res.render('cars');
	});
	
	
	app.post('/cars/:carId', (req, res)=>{
		res.render('cars',{
			title : req.body.title
		});
	});

};