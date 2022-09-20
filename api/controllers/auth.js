import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const register  = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            password: hash,
            email: req.body.email,
        });

        const oldUsername = req.body.username;

        const oldUser = await User.findOne({ username: oldUsername });
        if (oldUser) {
            return res.status(409).send('Username already exists, please try a new username.')
        }

        const token = jwt.sign(
            {
                _id: newUser._id,
                email: newUser.email,
            },
                process.env.TOKEN_KEY,
            {
                expiresIn: "2h"
            }
        );

        newUser.token = token;

        await newUser.save();
        res.status(201).send(newUser);

    } catch(err) {
        next(err);
    }
};

export const login  = async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) return next(createError(404, 'User not found'));

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect) return next(createError(400, 'Wrong password or username'));

        res.status(200).json(user._doc);
    } catch(err) {
        next(err);
    }
};