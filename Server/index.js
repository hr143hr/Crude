import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/user.route.js';
const app = express()
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT || 3000
const URL = process.env.MONGO_URL

mongoose.connect(URL).then(() => {

  console.log("Db connection sucessfullay.........................");

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });


})
  .catch((error) => console.log(error))


app.use('/api', route);

