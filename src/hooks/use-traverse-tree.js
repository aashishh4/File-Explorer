const useTraverseTree = () => {
    const insertNode = (tree, folderId, name, isFolder) => {
        if (tree.id === folderId && tree.isFolder) {
            return {
                ...tree,
                items: [
                    ...tree.items,
                    {
                        id: Date.now().toString(),
                        name,
                        isFolder,
                        items: isFolder ? [] : null
                    }
                ]
            };
        }

        return {
            ...tree,
            items: tree.items?.map(child => insertNode(child, folderId, name, isFolder)) || []
        };
    };

    const renameNode = (tree, nodeId, newName) => {
        if (tree.id === nodeId) {
            return { ...tree, name: newName };
        }

        return {
            ...tree,
            items: tree.items?.map(child => renameNode(child, nodeId, newName)) || []
        };
    };

    const deleteNode = (tree, nodeId) => {
        if (!tree.items) return tree;

        return {
            ...tree,
            items: tree.items
                .filter(item => item.id !== nodeId)
                .map(child => deleteNode(child, nodeId))
        };
    };

    return { insertNode, renameNode, deleteNode };
};

export default useTraverseTree;
