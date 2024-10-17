class InventoryManagement {
    constructor(stockThreshold = 10) {
        // Default threshold for triggering a restock alert
        this.stockThreshold = stockThreshold;
        this.products = {}; // To store products and their stock levels
    }

    // Function to add new products to inventory
    addProduct(productName, stockLevel) {
        if (this.products.hasOwnProperty(productName)) {
            throw new Error(`Product ${productName} already exists.`);
        }
        this.products[productName] = stockLevel;
    }

    // Function to process orders and reduce stock levels
    processOrders(orders) {
        let restockAlerts = [];

        for (let productName in orders) {
            if (!this.products.hasOwnProperty(productName)) {
                console.error(`Error: Product ${productName} does not exist in the inventory.`);
                continue;
            }

            const orderQty = orders[productName];
            if (orderQty > this.products[productName]) {
                console.error(`Error: Insufficient stock for ${productName}. Available: ${this.products[productName]}`);
                continue;
            }

            // Deduct the order quantity from the current stock
            this.products[productName] -= orderQty;

            // Trigger restock alert if stock goes below the threshold
            if (this.products[productName] < this.stockThreshold) {
                restockAlerts.push(productName);
            }
        }

        return restockAlerts; // Return products that need restocking
    }

    // Function to restock products
    restockItems(restocks) {
        for (let productName in restocks) {
            if (!this.products.hasOwnProperty(productName)) {
                console.error(`Error: Cannot restock ${productName} as it doesn't exist in the inventory.`);
                continue;
            }

            // Add the restock quantity to the current stock
            this.products[productName] += restocks[productName];
        }
    }
}

// Example usage:
const inventory = new InventoryManagement();

// Adding products to the inventory
inventory.addProduct("Laptop", 15);
inventory.addProduct("Smartphone", 8);

// Processing orders
const orders = {
    "Laptop": 5,
    "Smartphone": 3,
    "Tablet": 2 // Error: Tablet doesn't exist
};

const restockAlerts = inventory.processOrders(orders);
console.log("Restock Alerts:", restockAlerts); // Output: ["Smartphone"]

// Restocking items
const restocks = {
    "Smartphone": 10
};
inventory.restockItems(restocks);

console.log("Updated Inventory:", inventory.products);
