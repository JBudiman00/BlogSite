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
const verify = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const pw = req.body.password;
    if (username == process.env.USERNAME1) {
        if (pw === process.env.PASSWORD1) {
            res.send({
                verification: true
            });
        }
        else {
            res.send({
                verification: false
            });
        }
    }
    else if (username == process.env.USERNAME2) {
        if (pw === process.env.PASSWORD2) {
            res.send({
                verification: true
            });
        }
        else {
            res.send({
                verification: false
            });
        }
    }
    else {
        res.send({
            verification: false
        });
    }
});
module.exports = {
    verify
};