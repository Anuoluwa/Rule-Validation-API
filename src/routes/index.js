import express from "express";
import authorData from "../data/authorData";

const indexRouter = express.Router();

indexRouter.get("/", (req, res) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  res.status(200).json({
    message: "My Rule-Validation API",
    status: "success",
    data: authorData[0]
  }));

export default indexRouter;
