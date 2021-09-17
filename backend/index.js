// ! Imports
import express from 'express';
import mongoose from 'mongoose';
import dbConfig from './dbConfig.js';
import cors from 'cors';
import dotenv from 'dotenv';

// ! App Config
const port = process.env.PORT || '8000';
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// ! DB Config
mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// ! API Routes
app.get('/', (req, res) => {
	res.status(200).send('Welcome to the backend of Todo List App');
});

app.post('/contact', (req, res) => {
	const db = req.body;
	dbConfig.create(db, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});

// ! Listener
app.listen(port, () => {
	console.log(`Backend app listening at http://localhost:${port}`);
});
