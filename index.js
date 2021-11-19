import express from "express";
import  mongoose  from "mongoose";
import route from "./routes/index.js";
import cors from "cors";
const app = express();

mongoose.connect("mongodb://localhost:27017/");



const db = mongoose.connection;
db.on('error', (error)=> console.console.error(error));
db.once('open', () => console.log('Database Connected'));

app.use(cors());
app.use(express.json());
app.use('/Product',route);

app.listen('3000',()=> console.log('Server Running at port: 3000'));
