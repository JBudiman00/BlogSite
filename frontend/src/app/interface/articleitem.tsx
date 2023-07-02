export default interface ArticleItem {
    ID: number,
    type: string,
    category: string,
    title: string,
    summary: string,
    createdAt: string,
    updatedAt: string | null,
}