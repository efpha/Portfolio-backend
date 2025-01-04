import express from "express";
import cors from 'cors';
import path from 'path';
import dotenv, { config } from 'dotenv';

dotenv.config();

const App = express();
const Port = process.env.PORT

App.use(cors({
    origin: 'https://cephaportfolio.vercel.app',
    methods: ['GET'],
    allowedHeaders: ['Content-Type'] // Allow necessary headers
}));
App.use(express.json());


// route to cv
App.get('/api/download-cv', (req, res)=>{
    const filePath = path.resolve('public', 'Cepha_resume.pdf');
    res.download(filePath, 'Cepha_resume.pdf', (err) => {
        if(err){
            console.log("Error sending file: ", err);
            res.status(500).send('Error occurred while downloading the file')
        }
    })
})

App.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
})