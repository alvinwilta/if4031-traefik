import { RequestHandler } from "express";
import log from "../utils/logger";
import { StatusCodes } from "http-status-codes";
import ItemService from "../services/item.service";
import { Item } from "../interfaces/item.interface";

class ItemController {
  service: ItemService;
  constructor() {
    this.service = new ItemService();
  }

  createItem: RequestHandler = async (req, res) => {
    try {
      const param: Item = {
        name: req.body.name,
        desc: req.body.desc,
      };
      const item = await this.service.createItem(param);
      res.status(StatusCodes.OK).send(item);
    } catch (err: any) {
      log.error("createItem", err);
      res.status(StatusCodes.BAD_REQUEST).json({ err });
    }
  };

  deleteItem: RequestHandler = async (req, res) => {
    try {
      const id: number = req.body.id;
      const item = await this.service.deleteItem(id);
      res.status(StatusCodes.OK).send(item);
    } catch (err: any) {
      log.error("deleteItem", err);
      res.status(StatusCodes.BAD_REQUEST).json({ err });
    }
  };
}

export default ItemController;
