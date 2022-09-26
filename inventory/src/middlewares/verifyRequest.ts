import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { isEmpty } from "lodash";
import log from "../utils/logger";

export const verifyBodyRequest: RequestHandler = (req, res, next) => {
  if (isEmpty(req.body)) {
    log.error("Request have no body!");
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "No body provided!" });
  }
  next();
};
