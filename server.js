import { connectDB } from './config/db.js'
import express from 'express';
import router from './routes/car.routes.js';

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api', router);

app.listen(3000, () => {
    connectDB();
    console.log("Server is running on 3000 port!")
});