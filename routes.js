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
	
	app.get('/cars', (req, res) => {
		res.render('cars');
	})
	
	
	app.post('/cars', (req, res)=>{

		let car = new Car(req.body);

		let message = [];
		if(car.Brand == ''){
			message.push('Missing Brand!');
		}
		if(car.Model == ''){
			message.push('Missing Model!!');
		}
		if(car.year == ''){
			message.push('Missing year!!!');
		}
		/* if(car.driving == ''){
			message.push('Missing driving record!!!!');
		} */
		/* if(isNaN(req.body.year)){
			message.push('Missing year!!!')
		} */

		car.read = (req.body.read == "on" ? true : false);

		if(message.length == 0) {
			car.save();
			res.redirect('/');
		} else{
			
			res.render('cars',{
				Brand : req.body.Brand,
				Model: req.body.Model,
				year : req.body.year,
				driving : req.body.driving,
				message : message.join(', '),
			}); 
		}
		
	});

};