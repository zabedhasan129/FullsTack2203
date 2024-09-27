const blankInput = require("../helpers/blankInput");
const emailValidator = require("../helpers/emailvalidator");
const Passwordvalidator = require("../helpers/passwordvalidator");
let User = require("../model/userModel")
const bcrypt = require('bcrypt');
let registrationController = async (req, res) => {
    const { username, email, password } = req.body;
    console.log("hello",req.body);

    if (blankInput(username)) {
        res.send({ error: "Urername requires" })
    } else if (blankInput(email)) {
        res.send({ error: "Email required" })
    }
    else if (!emailValidator(email)) {
        res.send({ error: "Please enter a valid email" })
    }
    else if (blankInput(password)) {
        res.send({ error: "password required" })
    }
    else if (Passwordvalidator(password)) {
        res.send({ error: "At least 6 digit" })
    }
    else {
        let existingEmail = await User.find({ email: email });

        console.log(existingEmail)

        if (existingEmail.length > 0) {
            res.send({ error: `${email}   Already exixst` })
        }
        else {
            bcrypt.hash(password, 5, function (err, hash) {
                // Store hash in your password DB.
                console.log(hash)

                let user = new User({
                    username: username,
                    email: email,
                    password: hash,
                })
                user.save();
                res.send({
                    username: user.username,
                    email: user.email,
                    role: user.role,
                });
            });

        }
    }

};
module.exports = registrationController;