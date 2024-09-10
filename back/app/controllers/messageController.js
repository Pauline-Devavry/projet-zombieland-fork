import { Message } from "../models/Index.js";
import Joi from "joi";

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

export async function createOneMessage(req, res, next) {
  const messageContact = Joi.object({
    name: Joi.string().min(1).required(),
    first_name: Joi.string().min(1).required(),
    email: Joi.string().min(1).required(),
    content: Joi.string().min(1).required(),

  })
  
  const { error } = messageContact.validate(req.body);
  if (error) {
    const errorMessage = { message: "Vous devez remplir tous les champs" };
    return res.status(400).json(errorMessage);
  }

  const { name, first_name, email, content } = req.body;

      const newMessage = await Message.create({
        name,
        first_name,
        email,
        content
    });

    
    return res.status(201).json({ message: 'Message créé avec succès', newMessage });
}
