import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getArticles = async (req: Request, res: any) => {
    const result = await prisma.blogs.findMany({
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
        res.send({message: "Article successfully added"})
    } catch (e: any) {
        console.error(e);
        res.send(e);
    }
}

const updateArticles = async (req: any, res: any) => {
    try{
        const result = await prisma.blogs.update({
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
        res.json(result)
    } catch (e: any) {
        console.error(e);
        res.send({error: e});
    }
}

const deleteArticles = async (req: any, res:any) => {
    try{
        const result = await prisma.blogs.delete({
            where: {
                ID: +req.params.id
            }
        })
        res.send({message: "Article successfully delete"})
    } catch (e: any) {
        console.error(e);
        res.send({error: e});
    }
}

module.exports = {
    getArticles,
    getBlog,
    postArticles,
    updateArticles,
    deleteArticles
}