import { Request, Response, NextFunction } from "express";

function validateImageQuery(req: Request, res: Response, next: NextFunction) {
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

  next();
}

export default validateImageQuery;
