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
            const refreshToken = jwt.sign({ username: username }, process.env.REFRESHSECRET, { expiresIn: config_json_1.default.refreshTokenLife });
            res.cookie('token', token, { httpOnly: true, sameSite: 'None', secure: true }); //FOR DEVELOMENT PURPOSES ONLY
            res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'None', secure: true }); //FOR DEVELOMENT PURPOSES ONLY
            res.status(200).json({ "status": "Logged in", token, refreshToken });
        }
        else {
            res.status(401).json({ "status": "Couldn't log in" });
        }
    }
    else {
        res.status(401).json({ "status": "Couldn't log in" });
    }
});
const refresh = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const refreshToken = req.cookies.refreshToken;
        console.log(req.cookies);
        const { username } = jwt.verify(refreshToken, process.env.REFRESHSECRET);
        const accessToken = jwt.sign({ username: username }, process.env.JWTSECRET, { expiresIn: config_json_1.default.refreshTokenLife });
        res.cookie('token', accessToken, { httpOnly: false, sameSite: 'None', secure: true });
        return res.status(201).json({ "status": "Token Created" });
    }
    catch (err) {
        res.status(401).json({ error: err });
    }
});
const verify = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json();
});
module.exports = {
    login,
    refresh,
    verify
};
