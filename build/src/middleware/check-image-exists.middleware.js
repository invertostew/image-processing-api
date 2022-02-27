"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function checkImageExists(req, res, next) {
    const { filename, width, height } = req.params;
    const resizedImage = path_1.default.resolve(__dirname, '..', '..', 'assets', 'resized', `${filename}-${width}x${height}.jpg`);
    if (fs_1.default.existsSync(resizedImage)) {
        return res.sendFile(resizedImage);
    }
    next();
}
exports.default = checkImageExists;
