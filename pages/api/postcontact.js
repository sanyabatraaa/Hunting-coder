import fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            if (!req.body) {
                return res.status(400).json({ error: "No data provided" });
            }
    
            const data = JSON.stringify(req.body);
            console.log("Request body:", req.body);
    
            const fileList = await fs.promises.readdir('contactdata');
            console.log("File list:", fileList);
    
            const fileName = `${fileList.length + 1}.json`;
            console.log("New file name:", fileName);

            await fs.promises.writeFile(`contactdata/${fileName}`, data);
    
            res.status(200).json({ message: "Data saved successfully" });
        } catch (error) {
            console.error("Error writing to file:", error);
            res.status(500).json({ error: "Failed to save data" });
        }
    } else {
        res.status(200).json({ message: "All blogs" });
    }
}
