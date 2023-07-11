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
const getPhoto = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const photos = yield prisma.images.findMany({
            where: {
                blogID: +req.params.id
            }
        });
        const thumbnail = yield prisma.thumbnail.findUnique({
            where: {
                blogID: +req.params.id
            }
        });
        const result = { photos, thumbnail };
        return res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({ error: err });
    }
});
const postPhoto = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const arr = req.body.photos;
        const inputArr = arr.map((i) => {
            return { blogID: +req.params.id, image: i };
        });
        const result = yield prisma.images.createMany({
            data: inputArr
        });
        return res.status(201).json();
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ error: err });
    }
});
const patchPhoto = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const arr = req.body.photos;
        yield prisma.images.deleteMany({
            where: {
                blogID: +req.params.id
            }
        });
        arr.forEach((i) => {
            prisma.images.create({
                data: {
                    blogID: +req.params.id,
                    image: i
                }
            });
        });
        res.status(204).json();
    }
    catch (e) {
        console.error(e);
        res.status(400).send({ error: e });
    }
});
const deletePhoto = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.images.deleteMany({
            where: {
                blogID: +req.params.id
            }
        });
        return res.status(204).json();
    }
    catch (err) {
        res.status(400).json({ error: err });
    }
});
module.exports = {
    getPhoto,
    postPhoto,
    patchPhoto,
    deletePhoto
};
