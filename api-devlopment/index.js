//app.jS
import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/users', usersRoutes);

app.get("/", (req, res) => {
    console.log('working');
    res.send("Welcome to the Users API!")
});
app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).send('something broke');
});
  
  app.listen(5000, () => {
      console.log(`Server listening to port ${PORT}`);
  });
