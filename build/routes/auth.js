"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/API/login', (req, res) => {
    try {
        console.log(req.body);
        const params = req.body;
        console.log(params);
        res.cookie('asd', 'sad');
        res.status(200);
    }
    catch (err) {
        throw new Error(err);
    }
});
router.post('/API/signUp', (req, res) => {
});
exports.default = router;
