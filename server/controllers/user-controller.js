require("dotenv").config();
const User = require("../models/User-schema");
const router = require("express").Router();
const PASSWORD = process.env.PASSWORD;

router.route("/newuser").post(async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    if (!firstName || !lastName || !email) {
      throw new Error("Insufficient data");
    } else {
      console.log(req.body);
      let newUser = new User({
        firstName,
        lastName,
        email,
      });
      req.body.isAdmin ? (newUser[isAdmin] = true) : null;
      try {
        await newUser.save();
        res.status(201).json({
          status: "user created",
          newUser,
        });
      } catch (error) {
        if (error.errors) {
          const missingData = Object.keys(error.errors);
          throw new Error(
            `you are missing the following data: ${[...missingData]}`
          );
        } else {
          throw error;
        }
      }
    }
  } catch (err) {
    throw new Error(err);
  }
});

router.route("/login").post(async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      console.log('user not found')
      res.sendStatus(400)
    } else if (password === PASSWORD && user.isAdmin) {
      console.log("Successful login!");
      res.sendStatus(200);
    } else {
      console.log('incorrect credentials')
      res.sendStatus(401);
    }
  } catch (err) {
    console.log("--------------", err);
    res.send(err);
  }
});
//TODO: inform front-end of results!

module.exports = router;
