const Car = require('./model/carModel');

module.exports = (app)=>{

	app.get('/',  async (req, res) => {

		let cars = await Car.find();

		let car = {
			Brand: 'test',
			Model: 'yoink',
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
	/* Car by ID */
	app.get('/car/:id', async (req, res) => {
		let car = Car.findById(req.params.id);
		res.render('car', {
			car
		});
	});

	/* Find Cars */
	app.get('/cars', async (req, res) => {
		let cars = await Car.find();
		res.render('cars', {
			cars,
			car: new Car()
		});
	});

	/* New car checkboio */
	app.post('/cars', async (req, res) => {

		let car = new Car(req.body);

		let message = [];
		if (car.Model == "") {
			message.push('Missing Model');
		}

		if (car.Brand == "") {
			message.push('Missing Brand');
		}

		if (car.year == null) {
			message.push('Missing year');
		}
		if (isNaN(req.body.year)) {
			message.push('Driving? is it or not!')
		}

		car.driving = (req.body.driving == "on" ? true : false);

		if (message.length == 0) {
			await car.save();
			res.redirect('/cars');
		} else {
			let cars = await Car.find();
			res.render('cars', {
				car: req.body,
				cars,
				message: message.join(', ')
			});
		}
	});

	/* Edit car by ID */
	app.get('/cars/edit/:id', async (req, res) => {
		let cars = await Car.find();
		let car = await Car.findById(req.params.id);
		res.render('cars', {
			cars,
			car
		});
	});
	/* Validate car Edit!  */
	app.post('/cars/edit/:id', async (req, res) => {
		let car = await Car.findById(req.params.id);

		// validering!!!!


		car.Model = req.body.Model;
		car.Brand = req.body.Brand;
		car.year = parseInt(req.body.year);
		car.driving = req.body.driving == "on" ? true : false;
		await car.save();
		res.redirect('/cars');
	});
	/* BE GONE CARRRR */
	app.get('/cars/delete/:id', async (req, res) => {
		await Car.findByIdAndDelete(req.params.id);
		res.redirect('/cars');
	});

};