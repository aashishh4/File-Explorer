import React, { useState } from "react";
import Folder from "./Folder";
import useTraverseTree from "../hooks/use-traverse-tree";
import fileSystem from "../data";

const Explorer = () => {
    const [tree, setTree] = useState(fileSystem);
    const { insertNode, renameNode, deleteNode } = useTraverseTree();

    return (
        <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ width: "30%", borderRight: "1px solid #ddd", padding: "10px" }}>
                <h3>File Explorer</h3>
                <Folder
                    explorer={tree}
                    handleInsertNode={(folderId, name, isFolder) =>
                        setTree(prevTree => insertNode(prevTree, folderId, name, isFolder))
                    }
                    handleRenameNode={(nodeId, newName) =>
                        setTree(prevTree => renameNode(prevTree, nodeId, newName))
                    }
                    handleDeleteNode={(nodeId) =>
                        setTree(prevTree => deleteNode(prevTree, nodeId))
                    }
                />
            </div>

            <div style={{ flex: 1, padding: "10px" }}>
                <h3>File Content</h3>
                <p>Select a file to view its content here.</p>
            </div>
        </div>
    );
};

export default Explorer;
