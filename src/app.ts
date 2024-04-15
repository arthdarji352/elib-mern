import express, { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

//routes

app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to elib apis" });
});

app.use(globalErrorHandler);

export default app;
