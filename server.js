import express from "express";
import cors from 'cors';
import path from 'path';
import dotenv, { config } from 'dotenv';

dotenv.config();

const App = express();
const Port = process.env.PORT

App.use(cors({
    origin: 'https://cephaportfolio.vercel.app', // Your frontend domain
    methods: ['GET'], // Allow only GET requests (you can add more methods if needed)
    allowedHeaders: ['Content-Type'] // Allow necessary headers
})); // Connection between backend and frontend
App.use(express.json());


// route to cv
App.get('/api/download-cv', (req, res)=>{
    const filePath = path.resolve(process.env.CV_FILE_PATH);
    res.download(filePath, 'Resume_Joyanne_Achieng.pdf', (err) => {
        if(err){
            console.log("Error sending file: ", err);
            res.status(500).send('Error occurred while downloading the file')
        }
    })
})


App.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
})