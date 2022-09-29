import { RequestHandler } from "express";
import log from "../utils/logger";
import { StatusCodes } from "http-status-codes";
import Service from "../services/service";
import { toInteger, toString } from "lodash";

class Controller {
  service: Service;
  constructor() {
    this.service = new Service();
  }
  whoami: RequestHandler = async (req, res) => {
    res
      .status(StatusCodes.OK)
      .send(`add-sub instance number ${process.env.id || 1}`);
  };

  addition: RequestHandler = async (req, res) => {
    try {
      const x = toInteger(req.body.x);
      const y = toInteger(req.body.y);
      const result = await this.service.addition(x, y);
      res.status(StatusCodes.OK).send(toString(result));
    } catch (err: any) {
      log.error(err);
      res.status(StatusCodes.BAD_REQUEST).send({ err });
    }
  };

  subtraction: RequestHandler = async (req, res) => {
    try {
      const x = req.body.x;
      const y = req.body.y;
      const result = await this.service.subtraction(x, y);
      res.status(StatusCodes.OK).send(toString(result));
    } catch (err: any) {
      log.error(err);
      res.status(StatusCodes.BAD_REQUEST).send({ err });
    }
  };
}

export default Controller;
