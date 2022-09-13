import User from '../models/User.js';
import bcrypt from 'bcryptjs';

const register  = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            password: hash,
            email: req.body.email,
        });
    await newUser.save();
    res.status(201).send('User created.');

    } catch(err) {
        next(err);
    }
};

export default register;