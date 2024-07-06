const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/names', (req, res) => {
    res.send('Sampaio');
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})