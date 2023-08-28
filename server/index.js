import express from  'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

// intialize app
const app = express();


// set Up middleWare functions

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors())

const CONNECTION_URL = "mongodb+srv://javaScript:javaScript@cluster0.b4gc2ck.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// connect to mongodb database by mongoose

mongoose.connect(CONNECTION_URL).then(() => {
    app.listen(PORT, () => console.log("Server staring at the Port", PORT))
}).catch(error => {
    console.log("error is Occur", error.message)
})