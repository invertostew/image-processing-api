"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_image_query_middleware_1 = __importDefault(require("../middleware/validate-image-query.middleware"));
const check_image_exists_middleware_1 = __importDefault(require("../middleware/check-image-exists.middleware"));
const api_controller_1 = __importDefault(require("../controllers/api.controller"));
const apiRouter = express_1.default.Router();
const apiMiddleware = [validate_image_query_middleware_1.default, check_image_exists_middleware_1.default];
apiRouter.get('/images', apiMiddleware, api_controller_1.default.processImage);
exports.default = apiRouter;
