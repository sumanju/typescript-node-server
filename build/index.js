"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const router_list_1 = __importDefault(require("./router-list"));
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.use(router_list_1.default);
app.use(cookie_parser_1.default());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/watch', function (req, res) {
    res.cookie('asqwed', 'asd');
    console.log(req.headers);
    res.send(req.cookies);
});
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('running ', port);
});
