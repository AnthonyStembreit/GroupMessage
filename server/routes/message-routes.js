//first time you msg someone 
//create a conversation
//create two new UserConversations you and the convo and the other person and the convo 
//create a msg 

//anytime either of you msgs in that conversation in the future
//create a msg

const router = require('express').Router();
const { Conversation, Message, UserConversation } = require('../models');

router.post('/first-msg', async (req, res) => {
    try {
        let conversationData = await Conversation.create({ users: JSON.stringify(req.body.users) })
        console.log(conversationData)
        console.log(req.body.creater_id)
        await Message.create({ user_id: req.body.creater_id, conversation_id: conversationData.dataValues.id, body: req.body.message })
        for (i = 0; i < req.body.users.length; i++) {
            await UserConversation.create({ user_id: req.body.users[i], conversation_id: conversationData.id })
        }
        res.json({ message: "first messsage sent" })
    }
    catch {

    }

});

module.exports = router;