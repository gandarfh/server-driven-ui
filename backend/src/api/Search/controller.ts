import { Request, Response } from "express";

const show = (req: Request, res: Response) => {
  res.status(200).json({
    hello: "world",
  });
};

export default {
  show,
};
