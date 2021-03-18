const express = require("express");
const userModel = require("../models/user");
const router = express.Router();
const { validationResult } = require('express-validator');
const verfiyPassword = require("../middlewars/verfiyPassword")
const verifyToken = require("../middlewars/verifyToken")
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const multer = require("multer");
const fs = require("fs");

var upload = multer({ dest: 'public/userPic' })

router.post("/signup", upload.single("image"), verfiyPassword, async (req, res) => {
    fs.renameSync(req.file.path, req.file.destination + "/" + req.body.surName + ".png")
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        await userModel.create({
            profilePic: req.body.profilePic,
            firstName: req.body.firstName,
            surName: req.body.surName,
            dateOfBirth: (req.body.dateOfBirth),
            city: req.body.city,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password),
            //passwordConfirmation: bcryptjs.hashSync(req.body.passwordConfirmation),
        });
        res.send("well done");
    } catch (error) {
        console.log(error)
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

router.get("/admin", verifyToken, async (req, res) => {
    res.send(`Welcome ${req.user.firstName} to our Web Page`);
});


module.exports = router;
