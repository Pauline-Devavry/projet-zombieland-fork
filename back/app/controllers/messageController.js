import { Message } from "../models/Index.js";
import { usePagination } from "../utils/pagination.js";

export async function getAllMessages(req, res) {
	
	const { limit, offset } = usePagination(req.query)

	const messages = await Message.findAll({
		offset,
		limit
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
