export type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
};


export type ExplorerFolder = {
    id: string,
    name: string,
    isFolder: boolean,
    items: ExplorerFolder[]
}