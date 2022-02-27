"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_controller_1 = __importDefault(require("../controllers/api.controller"));
const apiRouter = express_1.default.Router();
apiRouter.get('/images', api_controller_1.default.processImage);
exports.default = apiRouter;
