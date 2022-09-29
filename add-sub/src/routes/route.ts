import { Router } from "express";
import Controller from "../controller/controller";
import { verifyBodyRequest } from "../middlewares/verifyRequest";

const route = Router();
const controller = new Controller();

route.get("/whoami", controller.whoami);
route.post("/add", verifyBodyRequest, controller.addition);
route.post("/sub", verifyBodyRequest, controller.subtraction);

export default route;
