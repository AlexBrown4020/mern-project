import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
    const newUser = new User(req.body)

    try {
        const savedLesson = await newUser.save();
        res.status(200).json(savedLesson);
    } catch(err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedUser);
    } catch(err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User deleted.');
    } catch(err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch(err) {
        next(err);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch(err) {
        next(err);
    }
});

export default router;