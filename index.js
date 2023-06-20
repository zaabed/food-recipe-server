const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefDetails = require('./data/chefDetails.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef Recipe is Running ');
})

app.get('/chefDetails', (req, res) => {
    res.send(chefDetails);
})

app.get('/chefDetails/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(chefDetails);
    }
    else {
        const selectedChef = chefDetails.find(c => parseInt(c._id) === id);
        res.send(selectedChef);
    }

})

app.listen(port, () => {
    console.log(`Chef Recipe API is running on port: ${port}`);
})