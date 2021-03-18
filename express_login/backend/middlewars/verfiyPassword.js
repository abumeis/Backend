const { check } = require('express-validator');

const verfiyPassword = [
    // Check Username
    check('email',).isEmail()
        .trim().escape().normalizeEmail(),
    // Check Password
    check('password').isLength({ min: 8 }).withMessage('Password Must Be at Least 8 Characters').custom((value, { req, loc, path }) => {
        if (value !== req.body.passwordConfirmation) {
            throw new Error("Passwords don't match");
        } else {
            return value;
        }
    }).matches('[0-9]').withMessage('Password Must Contain a Number').matches('[A-Z]').withMessage('Password Must Contain an Uppercase Letter').trim().escape(),


];
module.exports = verfiyPassword;
