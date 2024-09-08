const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

app.get('/generate-file', async (req, res) => {
    try {
        // Make a request to the external endpoint
        const response = await axios.get('http://server:3002/generate-file');

        // Extract the x-checksum header
        const checksum = response.headers['x-checksum'];

        // Define the directory and file path
        const dirPath = path.join('/', 'clientdata');
        const filePath = path.join(dirPath, 'received_file.txt');

        // Check if the directory exists, if not, create it
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

		//const base64String = Buffer.from(response.data).toString('base64');

        // Write the file to the /clientdata directory
        fs.writeFileSync(filePath, response.data);

        // Send the checksum and file path to the client
        res.json({
            message: 'File received and saved successfully!',
            checksum: checksum,
            filePath: filePath,
            fileContents: response.data
        });
    } catch (error) {
        console.error('Error fetching file:', error);
        res.status(500).json({ error: 'An error occurred while fetching the file' });
    }
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
