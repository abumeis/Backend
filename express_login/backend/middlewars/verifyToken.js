const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config");
const verifyToken = async (req, res, next) => {

    try {
        const token = req.headers.authorization;
        const result = jwt.verify(token.split(" ")[1], config.secretMessage);
        const user = await userModel.findOne({ _id: result.id, }).exec();
        req.user = user;
        next();
    } catch (err) {
        res.status(401).send("Not authorized");
    }
}

module.exports = verifyToken