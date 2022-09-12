import express from 'express';
import Lesson from '../models/Lesson.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const newLesson = new Lesson(req.body)

    try {
        const savedLesson = await newLesson.save();
        res.status(200).json(savedLesson);
    } catch(err) {
        res.status(500).json(err);
    }
});

export default router;