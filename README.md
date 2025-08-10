# MERN URL Shortener Tool

A full-stack URL shortener web application built with the MERN stack (MongoDB, Express, React, Node.js), Vite, and Tailwind CSS.

## Features

-   Shorten long URLs to a unique short code.
-   Redirect from short URL to the original URL.
-   Track the number of visits for each shortened URL.
-   Admin panel to view all shortened URLs and their visit counts.
-   Responsive design with Tailwind CSS.

## Tech Stack

-   **Frontend:** React.js, Vite, Tailwind CSS, React Router
-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB (with Mongoose)
-   **Short ID Generation:** nanoid

## Project Structure

```
MERN_URL_Shortener/
├── backend/
│   ├── models/
│   │   └── url.js
│   ├── routes/
│   │   └── url.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── UrlForm.jsx
│   │   │   └── UrlsTable.jsx
│   │   ├── pages/
│   │   │   ├── AdminPage.jsx
│   │   │   └── HomePage.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   └── tailwind.config.js
└── README.md
```

## Getting Started

### Prerequisites

-   Node.js (v14 or later)
-   npm
-   MongoDB (local instance or a MongoDB Atlas account)

### Local Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Sachin27182003/URL-Shortner-tool.git
    cd URL_Shortner-tool
    ```

2.  **Backend Setup:**

    ```bash
    cd backend
    npm install
    ```

    Create a `.env` file in the `backend` directory and add the following variables:

    ```
    MONGO_URI=<your_mongodb_connection_string>
    BASE_URL = <your_backend_url>
    ```

    Start the backend server:

    ```bash
    npm start
    ```

    The backend will be running on `http://localhost:5000`.

3.  **Frontend Setup:**

    Open a new terminal window.

    ```bash
    cd frontend
    npm install
    ```

    Create a `.env` file in the `frontend` directory and add a variable:

    ```

    VITE_API_URL = <'your_backend_url'>
    ```

    Start the frontend development server:

    ```bash
    npm run dev
    ```

    The frontend will be running on `http://localhost:5173`.


## Deployment

This URL Shortener Tool project is fully deployed and accessible online, making it easy for anyone to shorten and share URLs without running the application locally.

-   **Frontend (Vercel) :** https://url-shortner-tool-kappa.vercel.app/
The user-facing interface where you can enter a long URL, generate a shortened link, and manage your URLs.

-   **Backend End Point (Render) :** https://url-shortner-tool.onrender.com/
The server-side application that handles URL shortening, redirection, and visit tracking.


-   **Database :** MongoDB Atlas — Stores all original URLs, their shortened codes, and visit counts.

## How It Works in Production
- You visit the Frontend Live Demo and paste a long URL into the form.

- The frontend sends a request to the Backend API.

- The backend generates a short code, saves it in MongoDB Atlas, and returns the shortened link.

- Clicking the shortened link redirects you to the original URL and increments the visit count.

- The deployed version mirrors local development but is optimized for real-world usage, with cross-origin access enabled between the hosted frontend and backend.

## 🌟 Thank You for Checking Out This Project
Thank you for taking the time to explore the URL Shortener Tool! This project has been a great journey in applying my skills in full-stack web development, from designing the user interface to building the backend API and deploying a fully functional web application connected to a live database.

I genuinely appreciate your interest in this project. Whether you are a recruiter, fellow developer, or curious visitor, your time here means a lot to me. I believe in building tools that are simple, efficient, and enjoyable to use, and I hope this application reflects that philosophy.

If you have ideas for improvements, spot any issues, or simply want to collaborate, I’m always open to feedback and contributions. Let’s connect and make better tools together! 🚀


<h4 align="center"><b>🌟 Shorten. Share. Smile! 😊 — Thank youu! 🌟</b></h4>


 

#### 📬 Contact Me:

- **Email:** sachinsachinkumar27082003@gmail.com

- **LinkedIn:** https://linkedin.com/in/sachin-kumar-3440a1296

- **Portfolio:** https://sachin27.vercel.app
