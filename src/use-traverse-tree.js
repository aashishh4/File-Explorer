const useTraverseTree = () => {
    const insertNode = (tree, folderId, itemName, isFolder) => {
        if (tree.id === folderId && tree.isFolder) {
            tree.items.push({
                id: new Date().getTime().toString(), // Unique ID
                name: itemName,
                isFolder,
                items: isFolder ? [] : null
            });
            return { ...tree };
        }

        if (tree.items) {
            tree.items = tree.items.map(child =>
                insertNode(child, folderId, itemName, isFolder)
            );
        }

        return { ...tree };
    };

    return { insertNode };
};

export default useTraverseTree;
