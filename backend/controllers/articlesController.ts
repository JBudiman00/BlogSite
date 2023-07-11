import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getArticles = async (req: any, res: any) => {
    const result = await prisma.blogs.findMany({
        select: {
            ID: true,
            type: true,
            category: true,
            title: true,
            summary: true,
            createdAt: true,
            updatedAt: true,
            is_featured: true
        }
    }); 
    res.cookie('TestCookie', "testCookieJSON", { sameSite: 'None', secure: true });
    res.send(result);
}

const getBlog = async (req: any, res: any) => {
    const result = await prisma.blogs.findUnique({
        where: {
            ID: +req.params.id
        }
    });
    res.send(result);
}

const postArticles = async (req: any, res: any) => {
    try{
        await prisma.blogs.create({
            data: req.body
        })
        res.status(201).json();
    } catch (e: any) {
        console.error(e);
        res.send(e);
    }
}

const updateArticles = async (req: any, res: any) => {
    try{
        await prisma.blogs.update({
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
        })
        res.status(204).json();
    } catch (e: any) {
        console.error(e);
        res.status(400).send({error: e});
    }
}

const favArticle = async (req: any, res: any) => {
    try{
        const fav = req.params.id;
        await prisma.blogs.updateMany({
            where: {
                is_featured: true
            },
            data: {
                is_featured: false
            }
        });
        await prisma.blogs.update({
            where: {
                ID: +fav
            },
            data: {
                is_featured: true
            }
        });
        res.status(204).json();
    } catch (e: any) {
        console.error(e);
        res.status(400).send({error: e});
    }
}

const deleteArticles = async (req: any, res:any) => {
    try{
        await prisma.blogs.delete({
            where: {
                ID: +req.params.id
            }
        })
        res.status(204).json();
    } catch (e: any) {
        console.error(e);
        res.status(400).send({error: e});
    }
}

module.exports = {
    getArticles,
    getBlog,
    postArticles,
    updateArticles,
    deleteArticles,
    favArticle
}