"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_image_middleware_1 = __importDefault(require("../middleware/validate-image.middleware"));
const api_controller_1 = __importDefault(require("../controllers/api.controller"));
const apiRouter = express_1.default.Router();
apiRouter.get('/images', validate_image_middleware_1.default, api_controller_1.default.processImage);
exports.default = apiRouter;
