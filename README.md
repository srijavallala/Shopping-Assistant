# 🛍 Shopping Assistant - Chrome Extension
A simple Chrome extension that helps users compare product prices across different platforms.

##  Features
-  Search for any product using Google Shopping API.  
-  View price comparisons from multiple sources.  
-  Displays product images, prices, and links to buy.  
-  Direct purchase links to product pages.  

##  Tech Stack
- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express.js  
- **API Used**: [SerpAPI - Google Shopping](https://serpapi.com/)  
- **Database**: Not required (Fetches live data)  

##  Installation

### 1️. Clone the Repository  
First, navigate to your desired folder and clone the repository:

```sh
git clone https://github.com/srijavallala/Shopping-Assistant.git
cd Shopping-Assistant
```

### 2️. Install Dependencies
Run the following command to install all required dependencies:

```sh
npm install
```

### 3️. Set Up Environment Variables
Create a .env file in the root directory and add:

```sh
SERP_API_KEY=api_key
```

### 4️. Run the Server
Start the backend server:

```sh
node server.js
```

### 5️. Load the Chrome Extension
- Open Chrome and go to chrome://extensions/.
- Enable Developer Mode (top-right corner).
- Click "Load Unpacked" and select the extension folder.
- Now, open the extension popup and start searching!

##  Usage
- Open the extension popup.
- Enter a product name and click Search.
- View the product prices and compare them.

##  License
This project is for educational purposes only.
