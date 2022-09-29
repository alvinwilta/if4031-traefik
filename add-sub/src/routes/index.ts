import { Express } from "express";
import route from "./route";

export default function setupRoute(app: Express) {
  app.use("/", route);
}
