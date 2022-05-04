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
        let conversationData = await Conversation.create({ name: req.body.name?req.body.name:null})
        console.log(conversationData)
        console.log(req.body.creater_id)
        await Message.create({ user_id: req.body.creater_id, conversation_id: conversationData.dataValues.id, body: req.body.message })
        // for (i = 0; i < req.body.users.length; i++) {
        //     await UserConversation.create({ user_id: req.body.users[i], conversation_id: conversationData.id })
        // }
        const userConversationIdArr = req.body.users.map((user_id) => {
            return {
                conversation_id: conversationData.dataValues.id,
                user_id,
            };
        });
        await UserConversation.bulkCreate(userConversationIdArr);
        res.json({ message: "first messsage sent" })
    }
    catch {

    }

});


router.post('/:conversationId', async (req, res) => {
    try {
        await Message.create({ user_id: req.body.user_id, conversation_id: req.params.conversationId, body: req.body.message })

        res.json({ message: " messsage added" })
    }
    catch {

    }

});

module.exports = router;