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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//Get article information (Excludes content for API efficiency) 
const getArticles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.blogs.findMany({
        select: {
            ID: true,
            type: true,
            category: true,
            title: true,
            summary: true,
            createdAt: true,
            updatedAt: true
        }
    });
    res.send(result);
});
//Get specific blog content and information
const getBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.blogs.findUnique({
        where: {
            ID: +req.params.id
        }
    });
    res.send(result);
});
module.exports = {
    getArticles,
    getBlog
};
