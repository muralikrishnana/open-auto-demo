import express from "express";
import authRouter from "./auth/auth.route";

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  res.send("Hello from Open Auto API");
});
rootRouter.use("/auth", authRouter);

export default rootRouter;
