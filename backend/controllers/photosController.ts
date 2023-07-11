import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getPhoto = async (req: any, res: any, next: any) => {
    try{
        const photos = await prisma.images.findMany({
            where: {
                blogID: +req.params.id
            }
        });
        const thumbnail = await prisma.thumbnail.findUnique({
            where: {
                blogID: +req.params.id
            }
        })
        const result = {photos, thumbnail};
        return res.status(200).json(result);
    } catch(err:any) {
        res.status(400).json({error: err})
    }
}

const postPhoto = async (req: any, res: any, next: any) => {
    try{
        const arr: Array<string> = req.body.photos;
        const inputArr: Array<any> = arr.map((i: String) => {
            return {blogID: +req.params.id, image: i}
        })
        const result = await prisma.images.createMany({
            data: inputArr
        });
        return res.status(201).json();
    } catch(err:any) {
        console.log(err);
        res.status(400).json({error: err})
    }
}

const patchPhoto = async (req: any, res: any, next: any) => {
    try{
        const arr: Array<string> = req.body.photos;
        await prisma.images.deleteMany({
            where: {
                blogID: +req.params.id
            }
        })
        arr.forEach((i: string) => {
            prisma.images.create({
                data: {
                    blogID: +req.params.id,
                    image: i
                }
            })
        })
        res.status(204).json();
    } catch (e: any) {
        console.error(e);
        res.status(400).send({error: e});
    }
}

const deletePhoto = async (req: any, res: any, next: any) => {
    try{
        await prisma.images.deleteMany({
            where: {
                blogID: +req.params.id
            }
        });
        return res.status(204).json();
    } catch(err:any) {
        res.status(400).json({error: err})
    }
}

module.exports = {
    getPhoto,
    postPhoto,
    patchPhoto,
    deletePhoto
}