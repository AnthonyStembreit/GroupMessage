const router = require('express').Router();
const { User } = require('../models');

router.post("/api/signup", async (req, res) => {
    try {
        let newUser = await User.findOrCreate({
            where: { email: req.body.email },
            defaults: req.body
        });
        res.json(newUser)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router