import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import authRoute from './routes/auth.js';
import lessonsRoute from './routes/lessons.js';
import usersRoute from './routes/users.js';

const app = express();

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.mongo);
        console.log("Connected to mongoDB")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected');
});

app.use(express.json())

app.use('/auth', authRoute);
app.use('/users', usersRoute);
app.use('/lessons', lessonsRoute);

app.use((err,req,res,next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong, no error message found.";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})

app.listen(8000, () => {
    connect();
    console.log("Connected to backend");
});