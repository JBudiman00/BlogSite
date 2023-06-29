import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//Get article information (Excludes content for API efficiency) 
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

//Get specific blog content and information
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