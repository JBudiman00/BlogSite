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
const jwt = require('jsonwebtoken');
require('dotenv').config();
const config_json_1 = __importDefault(require("../config.json"));
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    if (username === process.env.ADMINUSER) {
        if (password === process.env.PASSWORD) {
            const token = jwt.sign({ username: username }, process.env.JWTSECRET, { expiresIn: config_json_1.default.tokenLife });
            // const token = jwt.sign({username: username}, process.env.JWTSECRET);
            const refreshToken = jwt.sign({ username: username }, process.env.REFRESHSECRET, { expiresIn: config_json_1.default.refreshTokenLife });
            return res.status(200).json({ "status": "Logged in", token, refreshToken });
        }
        else {
            return res.status(401).json("Couldn't log in");
        }
    }
    else {
        return res.status(401).json("Couldn't log in");
    }
});
const refresh = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization;
    try {
        if (authHeader && authHeader.startsWith('Bearer ')) {
            const refreshToken = authHeader.substring(7); // Extract the token by removing 'Bearer ' prefix
            // Verify the refresh token and extract the user ID
            const { username } = jwt.verify(refreshToken, process.env.REFRESHSECRET);
            console.log(username);
            const accessToken = jwt.sign({ username: username }, process.env.JWTSECRET, { expiresIn: process.env.EXPIREJWT });
            res.json({ accessToken });
        }
        else {
            res.status(401).json("unauthorized");
        }
    }
    catch (err) {
        res.status(401).json({ error: err });
    }
});
module.exports = {
    login,
    refresh
};
