# Assesment-repo----


# E-commerce Order Management System - Part 1

This project is a simple **E-commerce Order Management System** built using JavaScript. It consists of four main classes: `User`, `Product`, `Order`, and `Payment`. The system simulates the process of creating users, placing orders, adding products to the orders, making payments, and updating order statuses. This model is intended for educational purposes to demonstrate basic object-oriented programming concepts.

## Features

- **User Management**: Create and manage users with unique IDs, names, and emails.
- **Product Management**: Add products with unique IDs, names, and prices.
- **Order Management**: Users can place orders with multiple products, view total amounts, and update the status of the orders.
- **Payment Processing**: Payments can be processed for orders with status updates.

## Project Structure

### Classes

1. **User**: Represents a customer with user ID, name, email, and a list of their orders.
2. **Product**: Represents a product with a product ID, name, and price.
3. **Order**: Represents an order with an order ID, user ID, status (pending/shipped), and a list of products.
4. **Payment**: Represents a payment with a payment ID, order ID, amount, and status (pending/completed).

### Example Usage

```javascript
// Create a new user
const user1 = new User(1, 'Kartik', 'kartik@example.com');

// Create a new product
const product1 = new Product(101, 'Laptop', 1200);

// Create an order for the user
const order1 = new Order(201, user1.userId);
order1.addProduct(product1);

// Process a payment for the order
const payment1 = new Payment(301, order1.orderId, order1.getTotalAmount());
payment1.completePayment();
```

## How to Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/order-management-system.git
   cd order-management-system
   ```

2. **Run the script**:
   You can run this JavaScript file in any modern browser or with Node.js. If you use Node.js, follow these steps:

   - Install Node.js from [here](https://nodejs.org/).
   - Run the following command to execute the file:

   ```bash
   node index.js
   ```

3. **Output**:
   The script will output user orders, total amounts, order status, and payment details in the console.

## Alternative Implementations

There are several ways to extend or refactor this model:

1. **Use a Database**: Implement a database (like MongoDB or MySQL) to store user, product, and order data persistently.
2. **Frontend Integration**: Build a frontend with a library like React to allow users to interact with the system through a web interface.
3. **API-Based Architecture**: Create a RESTful API using Node.js and Express.js to expose endpoints for managing users, products, orders, and payments.
4. **Expand Payment System**: Add more complexity to the payment system (e.g., partial payments, refunds, different payment methods).
5. **Add Authentication**: Implement user authentication and authorization using JWT or OAuth for a secure experience.
6. **Improve Order Tracking**: Add real-time order tracking and notifications using WebSockets or a service like Firebase.


# Inventory Management System- Part 2

A simple inventory management system built in JavaScript to track stock levels, process sales orders, and manage restocking in a warehouse.

## Features

- **Add Products:** Add new products to the inventory with their initial stock levels.
- **Process Orders:** Reduce stock levels based on incoming sales orders.
- **Restock Alerts:** Trigger alerts when stock levels drop below a predefined threshold (default: 10 units).
- **Restock Items:** Update stock levels by restocking specific items.
- **Error Handling:** Handles invalid inputs, such as orders for non-existent products or insufficient stock.



# Part-3: Database Query Handling

This repository contains SQL queries for managing and retrieving data from an online bookstore database. The queries are designed to assist with analyzing customer purchases, calculating revenue, and managing book order details.

## Database Schema

The online bookstore consists of the following four tables:

- **Customers** (`customer_id`, `name`, `email`): Stores customer information.
- **Books** (`book_id`, `title`, `author`, `price`): Stores information about books available in the store.
- **Orders** (`order_id`, `customer_id`, `order_date`): Stores information about orders placed by customers.
- **OrderDetails** (`order_id`, `book_id`, `quantity`): Stores information about the books and quantities in each order.

---
