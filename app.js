const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
// express app
const app = express();

// connect to a mongodb database

const dbURI =
	'mongodb+srv://dev_abba:12345Asdf@cluster0.drtxp.mongodb.net/nodejs?retryWrites=true&w=majority';
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => app.listen(8080))
	.catch((error) => console.log(error));
// set up a templating engine
app.set('view engine', 'ejs');
// listen for request on port 8080 in the mongoose connection
// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
// app.get('/', (req, res) => {
// 	// res.send('Hello World');
// 	res.sendFile('/views/index.html', { root: __dirname });
// });

// app.get('/about', (req, res) => {
// 	// res.send('<p>About Page</p>');
// 	res.sendFile('/views/about.html', { root: __dirname });
// });

// //redirects in express
// app.get('/about-me', (req, res) => {
// 	res.redirect('/about');
// });

// 404 page
// app.use((req, res) => {
// 	res.status(404).sendFile('/views/404.html', { root: __dirname });
// });

app.get('/', (req, res) => {
	res.redirect('/blogs');
});

app.get('/add-blog', (req, res) => {
	const blog = new Blog({
		title: 'Isah Abba Ibrahim',
		snippet: 'My name is Isah Abba Ibrahim, I am a tired developer',
		body:
			'My name is Isah Ibrahim, I am a developer by mistake who is looking to making lots of money and buying mama and daddy Houses. I am not serious sometimes but i will soon be serious so i can achieve my dreams and i would take more risks.',
	});

	blog
		.save()
		.then((result) => {
			res.send(result);
			console.log('ahh, things done correctly moda damn');
		})
		.catch((error) => {
			res.send(error);
			console.log('ahh, things done wrong moda damn');
		});
});

// The all blogs can be directly referenced without creating an instance
app.get('/all-blogs', (req, res) => {
	Blog.find()
		.then((result) => {
			res.send(result);
		})
		.catch((error) => {
			res.send(error);
		});
});
app.get('/single-blog', (req, res) => {
	Blog.findById('62aa3e052cf737a1c709711b')
		.then((result) => {
			res.send(result);
		})
		.catch((error) => {
			res.send(error);
		});
});

app.get('/about', (req, res) => {
	res.render('about', { title: 'About' });
});

app.use('/blogs', blogRoutes);
app.use((req, res) => {
	res.status(404).render('404', { title: '404' });
});
