import { Message } from "../models/Index.js";

export async function getAllMessages (req, res) {
    
        const messages = await Message.findAll();
        
        return res.json(messages).status(200);
      };

      export async function getOneMessage(req, res, next) {

        const id = Number(req.params.id)
        const MessageId = await Message.findByPk(id);
         if(MessageId) {
            res.json(MessageId).status(200)
         }
        else {
        
         next();
         }
        };
