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
const getBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.blogs.findUnique({
        where: {
            ID: +req.params.id
        }
    });
    res.send(result);
});
const postArticles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.blogs.create({
            data: req.body
        });
        res.send({ message: "Article successfully added" });
    }
    catch (e) {
        console.error(e);
        res.send(e);
    }
});
const updateArticles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma.blogs.update({
            where: {
                ID: +req.params.id
            },
            data: {
                type: req.body.type || undefined,
                category: req.body.category || undefined,
                title: req.body.title || undefined,
                summary: req.body.summary || undefined,
                updatedAt: req.body.updatedAt || undefined,
                content: req.body.content || undefined,
            }
        });
        res.json(result);
    }
    catch (e) {
        console.error(e);
        res.send({ error: e });
    }
});
const deleteArticles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma.blogs.delete({
            where: {
                ID: +req.params.id
            }
        });
        res.send({ message: "Article successfully delete" });
    }
    catch (e) {
        console.error(e);
        res.send({ error: e });
    }
});
module.exports = {
    getArticles,
    getBlog,
    postArticles,
    updateArticles,
    deleteArticles
};
