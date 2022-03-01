import express from "express";

import apiRouter from "./routes/api.router";

const app = express();

const APP_PORT = 3000;

app.use("/api", apiRouter);

app.listen(APP_PORT, (): void => {
  console.log(`App listening on http://localhost:${APP_PORT}`);
});

export default app;
