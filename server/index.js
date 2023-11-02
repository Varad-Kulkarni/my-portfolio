import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import aboutRouter from './routes/about.js'
import projectRouter from './routes/project.js'

const app = express();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is my personal portfolio API...");
})

app.use('/about', aboutRouter)
app.use('/projects', projectRouter)

const DATABASE_URL = "mongodb+srv://vkk3portfolio:adminPortfolio@cluster0.hhzbswi.mongodb.net/?retryWrites=true&w=majority"

const PORT = 5000
mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => { console.log(`server is running at port ${PORT}`) }))
.catch((err) => console.log(err.message));