const blankInput = require("../helpers/blankInput");
const emailValidator = require("../helpers/emailvalidator");
const Passwordvalidator = require("../helpers/passwordvalidator");
let User = require("../model/userModel")
let registrationController = (req, res) => {
    const { username, email, password } = req.body;
    console.log(username, email, password);

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
        let user = new User({
            username: username,
            email: email,
            password: password,
        })
        user.save();
        res.send(user);
    }

}
module.exports = registrationController;