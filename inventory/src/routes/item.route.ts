//* Route for items
import { Router } from "express";
import { verifyBodyRequest } from "../middlewares/verifyRequest";
import ItemController from "../controller/item.controller";

const itemRoute = Router();
const itemController = new ItemController();

itemRoute.post("/create", verifyBodyRequest, itemController.createItem);
itemRoute.delete("/delete", verifyBodyRequest, itemController.deleteItem);

export default itemRoute;
