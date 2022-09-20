import { jwt } from "jsonwebtoken";

export const genAuthToken = (user) => {
    const secretKey = process.env.SECRET_TOKEN_KEY;

    const token = jwt.sign(
        {
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        secretKey
    );
    return token
};