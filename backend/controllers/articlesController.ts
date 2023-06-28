import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getArticles = async (req: Request, res: any) => {
    const result = await prisma.blogs.findMany(); 
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

module.exports = {
    getArticles,
    getBlog
}