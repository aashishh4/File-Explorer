import React, { useState } from "react";
import { FaFolder, FaFolderOpen, FaFile, FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const Folder = ({ explorer, handleInsertNode, handleRenameNode, handleDeleteNode }) => {
    const [expand, setExpand] = useState(false);

    return (
        <div style={{ marginLeft: 20 }}>
            <div>
                <span onClick={() => setExpand(!expand)} style={{ cursor: "pointer" }}>
                    {explorer.isFolder ? expand ? <FaFolderOpen /> : <FaFolder /> : <FaFile />} {explorer.name}
                </span>
                
                {explorer.isFolder && (
                    <>
                        <button onClick={() => {
                            const name = prompt("Enter folder name:");
                            if (name) handleInsertNode(explorer.id, name, true);
                        }}>
                            <FaPlus /> Folder
                        </button>
                        <button onClick={() => {
                            const name = prompt("Enter file name:");
                            if (name) handleInsertNode(explorer.id, name, false);
                        }}>
                            <FaPlus /> File
                        </button>
                    </>
                )}

                <button onClick={() => {
                    const newName = prompt("Enter new name:", explorer.name);
                    if (newName) handleRenameNode(explorer.id, newName);
                }}>
                    <FaEdit /> Rename
                </button>

                <button onClick={() => handleDeleteNode(explorer.id)}>
                    <FaTrash /> Delete
                </button>
            </div>

            {explorer.isFolder && expand && (
                <div>
                    {explorer.items?.map(child => (
                        <Folder
                            key={child.id}
                            explorer={child}
                            handleInsertNode={handleInsertNode}
                            handleRenameNode={handleRenameNode}
                            handleDeleteNode={handleDeleteNode}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Folder;
