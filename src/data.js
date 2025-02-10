const fileSystem = {
    id: "1",
    name: "Root",
    isFolder: true,
    items: [
        {
            id: "2",
            name: "Documents",
            isFolder: true,
            items: [
                { id: "3", name: "Resume.pdf", isFolder: false },
                { id: "4", name: "CoverLetter.docx", isFolder: false }
            ]
        },
        {
            id: "5",
            name: "Pictures",
            isFolder: true,
            items: [
                { id: "6", name: "vacation.jpg", isFolder: false }
            ]
        }
    ]
};

export default fileSystem;
