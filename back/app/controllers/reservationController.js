import { Reservation } from "../models/Index.js";

export async function deleteOneCategory (req, res, next) {

    const id = Number(req.params.id);
      await Category.destroy({where : {id:id}});
      res.json("Vous venez d'effacer la catégorie").status(204);
      
  };