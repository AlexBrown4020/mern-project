import User from '../models/User.js'

export const register  = async (req, res, next) => {
    try {
        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        });
    await newUser.save();
    res.status(201).send('User created.');

    } catch(err) {
        next(err);
    }
};