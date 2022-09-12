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

router.put('/:id', async (req, res) => {
    try {
        const updatedLesson = await Lesson.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedLesson);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Lesson.findByIdAndDelete(req.params.id);
        res.status(200).json('Lesson deleted.');
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id);
        res.status(200).json(lesson);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const lessons = await Lesson.find();
        res.status(200).json(lessons);
    } catch(err) {
        next(err)
    }
});

export default router;