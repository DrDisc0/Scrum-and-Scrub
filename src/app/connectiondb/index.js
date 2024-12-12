// Import necessary modules
import express from "express"; // Import Express framework
import mongoose from "mongoose"; // Import Mongoose for MongoDB interactions
import bodyParser from "body-parser"; // Import Body-parser for parsing request bodies
import dotenv from "dotenv"; // Import dotenv for loading environment variables
import {MongoClient, ServerApiVersion} from 'mongodb';

import route from "./routes/usersRoutes.js";

// Initialize Express app
const app = express();

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Load environment variables from .env file
dotenv.config();

// Define port for the server to listen on
const PORT = process.env.PORT || 5000;

// Define MongoDB connection URL from environment variables
const MONGOURL = process.env.MONGO_URL;

const client = new MongoClient(process.env.MONGO_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("Resume").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

// Connect to MongoDB database
mongoose
  .connect(MONGOURL)
  .then(() => {
    run().catch(console.dir);
    console.log("Database connected successfully."); // Log successful database connection
    // Start server on specified port
    app.listen(PORT, () => {
      console.log(`Server is running on port : http://localhost:${PORT}/`); // Log server running message
    });
  })
  .catch((error) => console.log(error)); // Log error if database connection fails

  app.use((req, res, next) => {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
    if (req.method === "OPTIONS") {  
     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");  
     return res.status(200).json({});  
    }  
    next();  
  });  

  app.use("/api/user", route);
  app.use(express.static('public'));
  app.get("/", (req, res) => {  
    res.send("Server is running!");  
  });

  app.post('/', (req, res) => {  
    res.status(404).json({ message: 'Not Found' });  
  });
