const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// const chefDetails = require('./data/chefDetails.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef Recipe is Running ');
})

app.listen(port, () => {
    console.log(`Chef Recipe API is running on port: ${port}`);
})