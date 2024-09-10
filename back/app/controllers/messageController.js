import { Message } from "../models/Index.js";

export async function getAllMessages(req, res) {
	
	const page = parseInt(req.query.page) || 1
	const limit = parseInt(req.query.limit) || 10
	const offset = (page - 1) * limit

	const messages = await Message.findAll({
		limit,
		offset
	})

	res.json(messages)

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
