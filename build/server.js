"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const APP_PORT = 3000;
app_1.default.listen(APP_PORT, () => {
    console.log(`App listening on http://localhost:${APP_PORT}`);
});
