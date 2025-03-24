const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }
    
    try {
        const response = await axios.get(`http://www.pricetree.com/dev/api.ashx?apikey=${process.env.PRICE_API_KEY}&q=${encodeURIComponent(query)}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from PriceTree API' });
    }
});

module.exports = router;