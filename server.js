import cors from 'cors';
import express from 'express';
import fetch from 'node-fetch';

const PORT = 4000;

const app = express();

app.listen(PORT, ()=>{
	console.log(`Server is running on PORT ${PORT}`);
});

app.get('/', async (req, res)=>{
	try {
		const response = await fetch('https://www.fruityvice.com/api/fruit/all');
		const data = await response.json();
		res.json(data);
	} catch (error){
		console.log(error.message);
	}
})