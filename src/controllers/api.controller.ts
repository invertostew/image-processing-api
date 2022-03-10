import { Request, Response } from "express";

function getImage(req: Request, res: Response): void {
  res.sendFile(res.locals.imageUrl);
}

export default { getImage };
