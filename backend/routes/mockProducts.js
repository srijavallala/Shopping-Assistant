const express = require("express");
const router = express.Router();

const mockProducts = [
  { id: 1, name: "Laptop", price: 999, source: "Amazon" },
  { id: 2, name: "Phone", price: 699, source: "eBay" },
  { id: 3, name: "Headphones", price: 199, source: "Walmart" }
];

router.get("/products", (req, res) => {
  res.json(mockProducts);
});

module.exports = router;
