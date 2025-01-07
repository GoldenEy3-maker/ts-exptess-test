import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));

app.get("/api", (req: Request, res: Response) => {
  res.send("Express Typescript on Vercel");
});

app.get("/api/ping", (req: Request, res: Response) => {
  res.send("pong 🏓");
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});

export default app;
