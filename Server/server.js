import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';

const PORT = process.env.port || 4000
const app = express()

app.use(express.json) // all the request will be pass using json method 
app.use(cors) // connect backend and frontend
await connectDB()// connecting the mongodb database

app.get((req,res) => (
    req.send("API Working ") // this will sends a request that API is working 
))

app.listen(PORT, () =>
    console.log('Server running on port '+ PORT) 
)