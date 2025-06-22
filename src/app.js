const express = require('express');

const app = express();

app.listen(2299, () => {
    console.log('Server is running on http://localhost:2299');
});

app.use('/test', (req, res) => {
    res.send('Hello, this is a test endpoint!');
});