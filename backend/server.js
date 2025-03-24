require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;
const SERP_API_KEY = process.env.SERP_API_KEY;

app.get("/api/products", async (req, res) => {
    const query = req.query.query;
    if (!query) {
        return res.status(400).json({ message: "Query parameter is required" });
    }

    try {
        const response = await axios.get("https://serpapi.com/search", {
            params: {
                engine: "google_shopping",
                q: query,
                api_key: SERP_API_KEY,
                gl:"IN",
                hl:"en"
            }
        });

        const results = response.data.shopping_results;
        if (!results || results.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }

        const products = results.map(item => ({
            title: item.title,
            price: item.price,
            source: item.source,
            link: item.product_link || `https://www.google.com/search?q=${encodeURIComponent(item.title)}`,
            image: item.thumbnail // Extract image URL
        }));

        res.json(products);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
