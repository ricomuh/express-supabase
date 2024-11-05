import express from "express";
import type { Express, Request, Response } from "express";

const app: Express = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Guys! my name is Rico");
});

export default app;
