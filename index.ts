import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 8081;

app.get("/", (req: Request, res: Response) => {
  const a = 1+1
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
