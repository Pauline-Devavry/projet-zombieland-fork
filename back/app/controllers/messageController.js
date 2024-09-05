import { Message } from "../models/Index.js";

export async function getAllMessages (req, res) {
    
        const messages = await Message.findAll();
        
        return res.json(messages).status(200);
      };
