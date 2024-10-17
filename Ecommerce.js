// User class to represent a customer
class User {
    constructor(userId, name, email) {
        this.userId = userId; // Unique identifier for the user
        this.name = name; // User's name
        this.email = email; // User's email
        this.orders = []; // Array to store user's orders
    }

    // Method to add an order to the user's list of orders
    addOrder(order) {
        this.orders.push(order);
    }

    // Method to retrieve all orders for the user
    getOrders() {
        return this.orders;
    }
}

// Product class to represent a product in the system
class Product {
    constructor(productId, name, price) {
        this.productId = productId; // Unique identifier for the product
        this.name = name; // Product's name
        this.price = price; // Product's price
    }
}

// Order class to represent a user's order
class Order {
    constructor(orderId, userId, status = 'pending', date = new Date()) {
        this.orderId = orderId; // Unique identifier for the order
        this.userId = userId; // ID of the user who placed the order
        this.status = status; // Order's status (default: 'pending')
        this.date = date; // Date the order was created
        this.products = []; // Array to store products in the order
    }

    // Method to add a product to the order
    addProduct(product) {
        this.products.push(product);
    }

    // Method to calculate the total amount for the order based on product prices
    getTotalAmount() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }

    // Method to update the status of the order (e.g., 'shipped', 'delivered')
    updateStatus(newStatus) {
        this.status = newStatus;
    }
}

// Payment class to represent a payment made for an order
class Payment {
    constructor(paymentId, orderId, amount, status = 'pending') {
        this.paymentId = paymentId; // Unique identifier for the payment
        this.orderId = orderId; // ID of the order for which the payment is made
        this.amount = amount; // Amount paid
        this.status = status; // Payment status (default: 'pending')
    }

    // Method to mark the payment as completed
    completePayment() {
        this.status = 'completed';
    }
}

// Example usage-- From Here are example:

// Create users
const user1 = new User(1, 'Kartik', 'kartik@example.com'); // User Kartik
const user2 = new User(2, 'Kaipl', 'kaipl@example.com'); // User Kaipl

// Create products
const product1 = new Product(101, 'Laptop', 1200); // Laptop product
const product2 = new Product(102, 'Mouse', 25); // Mouse product
const product3 = new Product(103, 'Keyboard', 75); // Keyboard product

// Create orders for user1 (Kartik)
const order1 = new Order(201, user1.userId); // Order for Kartik
order1.addProduct(product1); // Add laptop to order1
order1.addProduct(product2); // Add mouse to order1

// Create orders for user2 (Kaipl)
const order2 = new Order(202, user2.userId); // Order for Kaipl
order2.addProduct(product3); // Add keyboard to order2

// Add orders to users
user1.addOrder(order1); // Add order1 to Kartik's orders
user2.addOrder(order2); // Add order2 to Kaipl's orders

// Create payments for the orders
const payment1 = new Payment(301, order1.orderId, order1.getTotalAmount()); // Payment for Kartik's order1
payment1.completePayment(); // Mark payment1 as completed

const payment2 = new Payment(302, order2.orderId, order2.getTotalAmount()); // Payment for Kaipl's order2

// Print user details
console.log("User 1 (Kartik) Orders:", user1.getOrders()); // List all orders for Kartik
console.log("User 2 (Kaipl) Orders:", user2.getOrders()); // List all orders for Kaipl

// Print order details
console.log("Order 1 total amount:", order1.getTotalAmount()); // Total amount for order1
console.log("Order 1 status:", order1.status); // Status of order1 (before update)
order1.updateStatus('shipped'); // Update the status of order1 to 'shipped'
console.log("Order 1 updated status:", order1.status); // Status of order1 (after update)

// Print payment details
console.log("Payment 1 details:", payment1); // Payment details for order1 (Kartik's order)
console.log("Payment 2 details:", payment2); // Payment details for order2 (Kaipl's order)
