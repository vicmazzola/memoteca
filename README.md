# Memoteca

This web application was built as part of the Alura course **JavaScript: Making HTTP Requests**. It follows the course content with adaptations and enhancements.

## ✨ Project Overview
The project demonstrates the fundamentals of web development with JavaScript by implementing CRUD (Create, Read, Update, Delete) operations through HTTP requests. It simulates a real-world development environment using a fake API, enabling real-time data updates.

## 🔍 Key Learning Outcomes
- Understanding client-server communication.
- Using **JSON Server** to simulate a fake API.
- Working with HTTP methods: **GET**, **POST**, **PUT**, and **DELETE**.
- Inspecting and debugging HTTP requests (headers, body, and status codes).
- Leveraging JavaScript’s **Fetch API** for HTTP requests.

## 🔨 Project Features
- Simulated API with **JSON Server** to manage data.
- CRUD operations:
  - **Create**: Add new data to the fake API.
  - **Read**: Fetch and display data from the API.
  - **Update**: Edit existing data in real-time.
  - **Delete**: Remove data entries.
- Organized JavaScript files with clear responsibilities:
  - `ui.js`: Handles user interface interactions.
  - `main.js`: Manages core application logic.
  - `api.js`: Configures and executes HTTP requests.
- Use **Fetch API** for making requests.
- Real-time updates and data manipulation via HTTP requests.

## ✅ Technologies Used
- **HTML**: For structuring the application’s content.
- **CSS**: For styling and layout.
- **JavaScript**: For dynamic interaction, including:
  - **Fetch API**: Native method for making HTTP requests.
- **JSON Server**: Simulates an API for development purposes.

## 📂 Project Structure
The project is organized into a clear folder structure:

```bash
├── assets/                # Directory for assets
│   ├── images/            # Directory for image assets
├── backend/               # Directory for backend-related files
│   ├── db.json            # JSON Server database file
│   ├── package.json       # Configuration file for JSON Server
├── css/                   # Directory for CSS files
│   ├── styles.css         # Main stylesheet
├── js/                    # Directory for JavaScript files
│   ├── api.js             # Handles HTTP requests
│   ├── main.js            # Core application logic
│   ├── ui.js              # Manages user interface interactions
├── index.html             # The main HTML file providing the app structure
```

