import itemRoute from "./item.route";
import { Express } from "express";

export default function setupRoute(app: Express) {
  app.use("/item", itemRoute);
}
