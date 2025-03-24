document.getElementById("searchBtn").addEventListener("click", async () => {
    const query = document.getElementById("searchQuery").value.trim();
    if (!query) {
        alert("Please enter a search query!");
        return;
    }

    try {
        const response = await fetch(`http://localhost:5000/api/products?query=${query}`);
        const products = await response.json();

        const productList = document.getElementById("productList");
        productList.innerHTML = ""; // Clear previous results

        if (products.length === 0) {
            productList.innerHTML = "<p>No products found.</p>";
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Source:</strong> ${product.source}</p>
                </div>
                <a href="${product.link}" target="_blank" class="view-btn">View</a>
            `;

            productList.appendChild(productCard);
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        alert("Failed to fetch product data. Please try again.");
    }
});
