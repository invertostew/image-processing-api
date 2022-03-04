import { Request, Response, NextFunction } from "express";

function validateImageQuery(
  req: Request,
  res: Response,
  next: NextFunction
): Response<any, Record<string, any>> | undefined {
  const { filename, width, height } = req.query;

  if (Object.entries(req.query).length === 0 || !filename) {
    const filenames = `
      <h1>Please select an image from below:</h1>
      <ul>
        <li><a href="?filename=encenadaport">encenadaport</a></li>
        <li><a href="?filename=fjord">fjord</a></li>
        <li><a href="?filename=icelandwaterfall">icelandwaterfall</a></li>
        <li><a href="?filename=palmtunnel">palmtunnel</a></li>
        <li><a href="?filename=santamonica">santamonica</a></li>
      </ul>
    `;
    return res.status(200).send(filenames);
  }

  if (filename && !width) {
    return res
      .status(400)
      .send("Please append '&width=<WIDTH>' to the URL. Example: &width=500");
  }

  if (filename && !height) {
    return res
      .status(400)
      .send(
        "Please append '&height=<HEIGHT>' to the URL. Example: &height=500"
      );
  }

  if (
    Number.isNaN(Number(width)) ||
    Number.isNaN(Number(height)) ||
    Number(width) <= 0 ||
    Number(height) <= 0
  ) {
    return res
      .status(400)
      .send("Invalid width or height. Must be a number >= 1.");
  }

  next();
}

export default validateImageQuery;
