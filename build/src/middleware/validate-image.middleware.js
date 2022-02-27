"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateImageQuery(req, res, next) {
    const { filename, width, height } = req.query;
    if (!filename || !width || !height) {
        return res.status(400).json({ error: 'Please ensure you have provided a filename, width and height.' });
    }
    next();
}
exports.default = validateImageQuery;
