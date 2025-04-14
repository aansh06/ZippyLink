
# 🔗 ZippyLink

ZippyLink is a modern full-stack URL shortener platform built with a Spring Boot backend and a React frontend. It allows users to create, manage, and analyze shortened links from a sleek, intuitive dashboard — combining speed, security, and simplicity.

---

## 🚀 Tech Stack

### Backend
- **Spring Boot** (Java)
- **Spring Data JPA + Hibernate**
- **PostgreSQL**
- **JWT Authentication**

### Frontend
- **React.js** 
- **Tailwind CSS**

---

## ✨ Features

- 🔒 Secure user authentication (JWT-based)
- 🔗 Shorten long URLs instantly
- 📊 Real-time analytics (clicks, location, referrer)
- 🧾 User dashboard to manage and organize links
- 🌐 Responsive, modern UI
- 📦 Dockerized backend for smooth deployment

---

## ⚙️ Local Development Setup

### 📁 Backend (Spring Boot)

```bash
# Clone the repo and navigate to backend directory
cd ZippyLink-sb

# Add your application.properties
# Configure database settings (PostgreSQL or MySQL as needed)

# Run the application
./mvnw spring-boot:run
```

> Make sure PostgreSQL or MySQL is running locally, and DB credentials match the `application.properties` file.

---

### 💻 Frontend (React)

```bash
# Navigate to frontend directory
cd ZippyLink-react

# Install dependencies
npm install

# Start the development server
npm run dev
```

> App will run at `http://localhost:5173` (or the port configured)

---

## 🛡️ Authentication

- JWT-based secure login & registration
- Auth-protected dashboard routes
- Token stored safely in localStorage

---

## 🐳 Docker (Optional)

You can build and run the backend using Docker:

```bash
# Inside ZippyLink-sb folder
docker build -t zippylink-backend .
docker run -p 8080:8080 zippylink-backend
```

---

