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
        let allUsers = await UserConversation.findAll({
            where: {
                user_id: 1
            },
            attributes: ["user_id"],
            include: [{
                model: Conversation,
                attributes: ["id", "updatedAt"],
                include: [
                    {
                        model: UserConversation,
                        include: [
                            {
                                model: User,
                                attributes: ["name"]
                            }
                        ],
                        attributes: ["id"]
                    },
                    {
                        model: Message,
                        include: [
                            {
                                model: User,
                                attributes: ["name"]
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