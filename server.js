import express from 'express';

import Router from './routes/course.js';

const app = express();

app.use(express.json());

app.use('/api', Router); //to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
