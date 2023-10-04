import express from 'express'
import cors from 'cors'

const app = express();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is my personal portfolio API...");
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})