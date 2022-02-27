"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
function processImage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const assetsDir = path_1.default.resolve(__dirname, '..', '..', 'assets');
        ;
        const { filename, width, height } = req.query;
        try {
            const file = yield (0, sharp_1.default)(`${assetsDir}/full/${filename}.jpg`)
                .resize(width, height)
                .toFile(`${assetsDir}/resized/${filename}-${width}x${height}.jpg`);
            res.send('OK');
        }
        catch (err) {
            res.send(err);
        }
        // const { filename, width, height } = req.query;
        // try {
        //   const file = await sharp(`${assetsPath}/full/${filename}.jpg`)
        //     .resize(width, height)
        //     .toFile(`${assetsPath}/resized/${filename}-${width}x${height}.jpg`);
        //   res.sendFile(file);
        // } catch (err) {
        //   res.send(err);
        // }
    });
}
exports.default = { processImage };
