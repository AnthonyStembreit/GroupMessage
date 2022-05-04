const router = require('express').Router();
const { User, Message, Conversation, UserConversation } = require('../models');

router.post("/", async (req, res) => {
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
router.get("/", async (req, res) => {
    try {
        let allUsers = await User.findOne({
            where: {
                id: 1
            },
            attributes: ["name", "email", "id"],
            include: [{
                model: Conversation,
                through: {model: UserConversation, attributes:[]},
                attributes: ["id", "updatedAt"],
                include: [
                    {
                        model: User,
                        attributes: ["name",],
                        through: {model: UserConversation, attributes:[]},
                    },
                    {
                        model: Message,
                        include: [
                            {
                                model: User,
                                attributes: ["name", "id"]
                            }
                        ],
                        attributes: ["createdAt", "body"]
                    }]
            }]
        });
        //{include:[Message, {model:UserConversation, include: [{model:Conversation, include:[Message]}]}]}
        res.json(allUsers)
    } catch (error) {
        console.log(error)
    }
})
module.exports = router