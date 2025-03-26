import { ExplorerFolder } from "../model";

const useAddNewNode = () => {
    function insertNode(tree: ExplorerFolder, folderId: string, name: string, isFolder: boolean): ExplorerFolder {
        // if the new file/folder is to added on the root directory, then add that here
        // the second check is to check whether root is a folder or not. Because we can add items in a folder only.
        if (tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime().toLocaleString(),
                name: name,
                isFolder: isFolder,
                items: []
            })
            return tree;
        }

        let newTree = []
        newTree = tree?.items?.map((node) => {
            return insertNode(node, folderId, name, isFolder)
        })

        return { ...tree, items: newTree }

    }

    return { insertNode }
}

export default useAddNewNode;
