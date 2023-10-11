export interface articleItem {
    ID: number,
    type: string,
    category: string,
    title: string,
    summary: string,
    createdAt: string,
    updatedAt: string | null,
    is_featured: boolean
}

export interface blogblock {
    title: string,
    img_link: string,
    id: number
}
export interface blogdisplay{
    initialList: articleItem[],
    setFilter: any
    filteredArticles: any
}

export interface Bloghighlightprops {
    data: articleItem | null,
    title: string
}