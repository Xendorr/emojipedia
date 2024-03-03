# Project Name

emojipedia

## Description

This project is a full stack application that requires a backend server and a PostgreSQL database.

## Installation

1. Clone the repository: `git clone https://github.com/Xendorr/emojipedia.git`
2. Navigate to the project directory: `cd emojipedia`
3. Install dependencies using npm: `npm install`

## Database Setup

1. Install PostgreSQL if you haven't already: [PostgreSQL Downloads](https://www.postgresql.org/download/)
2. Create a new PostgreSQL database for the project.
3. Import the EmojiList.CSV into your PostgreSQL Database.
4. Create a `.env` file in the backend folder. Update the database configuration in the project's `.env` file with your PostgreSQL database credentials.

## Backend Server Setup

❗ NOTE: The server is setup to use the `.env` file with the necessary configuration: PG_USER, PG_HOST, PG_DATABASE, PG_PASSWORD, PG_PORT;

1. Navigate to the 'backend' folder: `cd backend`
2. Ensure that you update the database query to use the appropriate table name: `"SELECT * FROM (your table)"`
3. Start the server: `node index.js`
4. The server will run on `http://localhost:3001`

## Frontend Server Setup

1. Go back to the main folder: `cd ..`
2. Start the frontend application: `npm run start`
3. The web application will run on `http://localhost:3000`

## Description

- This project was made during the Complete 2024 Web Development bootcamp. It is a simple web app that displays a list of emojis and their meanings. The original project was made using React, and it had 3 emojis mapped from a JSON file. I have modified the project to use a Node.js server and fetch the emojis from a PostgreSQL database.

- This project is a good example of a full-stack web application. The front-end is made using React, and the back-end is made using Node.js and Express. The database is PostgreSQL. The front-end and back-end are connected using the fetch API.

- The original project was made by { Angela Yu }. I have modified the project to use a Node.js server and fetch the emojis from a PostgreSQL database.

- During this project, I have practiced how to create a Node.js server, how to connect to a PostgreSQL database, and how to fetch data from the server using the fetch API. I have also practiced how to use the useEffect hook to fetch data from the server when the component mounts.

- I have also practiced how to use the useState hook to manage the state of the component and how to map through an array of objects to render them in the component. I am happy with the result of this project. I have learned a lot of new things, and I have practiced a lot of concepts that I have learned during the bootcamp.

💯 Looking forward to the next project! ✅
