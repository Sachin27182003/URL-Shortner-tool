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
    git clone <repository-url>
    cd MERN_URL_Shortener
    ```

2.  **Backend Setup:**

    ```bash
    cd backend
    npm install
    ```

    Create a `.env` file in the `backend` directory and add the following variables:

    ```
    MONGO_URI=<your_mongodb_connection_string>
    BASE_URL=http://localhost:5000
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

    Start the frontend development server:

    ```bash
    npm run dev
    ```

    The frontend will be running on `http://localhost:5173`.

### Accessing the Application

-   **Home Page:** `http://localhost:5173`
-   **Admin Page:** `http://localhost:5173/admin`

## Deployment

### Backend (Render)

1.  Push your code to a GitHub repository.
2.  Go to [Render](https://render.com/) and create a new "Web Service".
3.  Connect your GitHub repository.
4.  Configure the settings:
    -   **Name:** Choose a name for your service.
    -   **Root Directory:** `backend`
    -   **Build Command:** `npm install`
    -   **Start Command:** `npm start`
5.  Add your environment variables (`MONGO_URI`, `BASE_URL` with your production frontend URL).
6.  Deploy the service.

### Frontend (Vercel)

1.  Push your code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com/) and create a new project.
3.  Connect your GitHub repository.
4.  Configure the settings:
    -   **Framework Preset:** Vite
    -   **Root Directory:** `frontend`
5.  Add your environment variables. Set `VITE_API_URL` to your deployed backend URL.
6.  Deploy the project.

# URL-Shortner-tool
