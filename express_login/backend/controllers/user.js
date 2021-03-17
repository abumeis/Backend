const express = require("express");
const userModel = require("../models/user");
const router = express.Router();
const { validationResult } = require('express-validator');
const verfiyPassword = require("../middlewars/verfiyPassword")
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs")


router.post("/signup", verfiyPassword, async (req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        await userModel.create({
            firstName: req.body.firstName,
            surName: req.body.surName,
            dateOfBirth: (req.body.dateOfBirth),
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password),
            //passwordConfirmation: bcryptjs.hashSync(req.body.passwordConfirmation),
        });
        res.send("well done");
    } catch (error) {
        res.status(500).send("try again")
    }
}
)


router.post("/login", async (req, res) => {
    const user = await userModel
        .findOne({
            email: req.body.email,
        }).exec();
    if (bcryptjs.compareSync(req.body.password, user.password)) {
        const token = jwt.sign(
            {
                id: user._id,
            },
            "secret_Message",
            {
                expiresIn: 6000,
            }
        );
        res.status(200).json({
            message: "connected",
            token: token,
        });
    } else {
        res.status(401).send("incorrect password");
    }
});
module.exports = router;
