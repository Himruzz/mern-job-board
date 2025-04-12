

# Job Board Platform (MERN Stack)

## Overview
This project is a full-stack job board platform built using the MERN stack (MongoDB, Express, React, Node.js). The platform allows users to view job postings, filter jobs by category, and submit new job listings. The application is responsive, making it suitable for desktop, tablet, and mobile devices.

## Key Features
- **Job Listings:** Display a list of job postings fetched from the backend.
- **Post a Job:** A form to submit new job postings.
- **Category Filtering:** Filter job listings by category (e.g., Design, Development, Marketing).
- **Responsive Design:** Optimized for various screen sizes (desktop, tablet, mobile).
- **Backend API:** Node.js and Express handle job data, with the option to use MongoDB for persistent storage.

## Tech Stack
- **Frontend:** React (functional components, hooks), CSS Modules or Tailwind CSS (for styling)
- **Backend:** Node.js, Express (MongoDB optional)
- **Database:** MongoDB Compass

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (optional, only if using MongoDB)
- [Git](https://git-scm.com/)

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/Himruzz/mern-job-board-platform.git
cd job-board-platform
```

#### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. If you're using MongoDB, make sure to set up a MongoDB instance (local or cloud) and update the connection string in `backend/config/db.js` (or similar file).

4. Run the backend server:
   ```bash
   npm start
   ```

   The server will be running on `http://localhost:5000` (or another port if specified).

#### 3. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd Client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the frontend development server:
   ```bash
   npm start
   ```

   The frontend will be running on `http://localhost:3000`.

### Usage

1. Open the frontend application in your browser (`http://localhost:3000`).
2. View job listings on the homepage.
3. Use the category filter to filter jobs.
4. Submit a job by clicking the "Post a Job" button and filling out the form.
5. The backend will handle form submission and refresh the job list.

### Folder Structure

```
job-board-platform/
├── client/
├── public/
├── src/
│   ├── api/
│   │   └── jobs.js
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── JobCard.jsx
│   │   ├── JobList.jsx
│   │   ├── FilterBar.jsx
│   │   ├── PostJobForm.jsx
│   │   ├── Footer.jsx
│   │   └── *.css (optional)
│   ├── pages/
│   ├── App.jsx
│   └── index.js

├── server/                    # Express Backend
│   ├── config/                # MongoDB connection
│   │   └── db.js
│   ├── models/                # MongoDB Schemas
│   │   └── Job.js
│   ├── routes/                # API routes
│   │   └── jobRoutes.js
│   ├── controllers/           # Request logic (optional)
│   │   └── jobController.js
│   ├── server.js              # Main Express entry
│   └── .env                   # MongoDB URI
├── package.json               # Root (optional if separate installs)
├── README.md

```

### API Endpoints
- **GET `/jobs`**: Fetch all job postings.
- **POST `/jobs`**: Submit a new job posting. Requires a payload with `title`, `company`, `category`, `location`, and `description`.

### Screenshots

![image](https://github.com/user-attachments/assets/218c1447-3820-4834-9bb6-24c84fc7b48a)
![image](https://github.com/user-attachments/assets/9d0129f8-5ca7-4c5b-a2ba-05e557c42baf)
![image](https://github.com/user-attachments/assets/3737aac3-aab0-4fd0-a727-241a66b67aaf)
![image](https://github.com/user-attachments/assets/bcf68c8c-b628-4657-b89d-34c80e8835ec)






### Notes
- MongoDB integration is optional. If you want to use MongoDB, follow the setup instructions in the `backend/config/db.js` file to connect your app to the database.
- The app is designed to be fully responsive and will adjust to different screen size
