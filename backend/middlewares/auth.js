const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.SESSION_SECRET;

const isLoggedIn = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(403).json({
            message: "Token is Missing"
        })
    }

    const token = authHeader.split(" ")[1];

    try {
        const verifiedUser = jwt.verify(token, JWT_SECRET);
        if (verifiedUser.userId) {
            req.userId = verifiedUser.userId;
            next();
        }
    } catch (err) {
        return res.status(403).json({
            message: "Authentication Failed" + err
        })
    }
}

module.exports = isLoggedIn;