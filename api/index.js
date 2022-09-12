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

app.use('/auth', authRoute);
app.use('/users', usersRoute);
app.use('/lessons', lessonsRoute);

app.listen(8000, () => {
    connect();
    console.log("Connected to backend");
});