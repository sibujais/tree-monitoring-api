
# Tree Monitoring API

A REST API built using Node.js, Express.js, MongoDB, and Mongoose for managing tree monitoring records.

---

## Features

- Add a new tree record
- Get all tree records
- Filter trees by species
- Filter trees by health status
- Update tree health status
- Get monitoring statistics

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv

---

## Project Structure

```text
src/
├── config/
│   └── db.js
│
├── controllers/
│   └── treeController.js
│
├── models/
│   └── Tree.js
│
├── routes/
│   └── treeRoutes.js
│
├── app.js
│
server.js
.env
```

# Installation
```
## Clone Repository
git clone <repository-url>

## Install Dependencies
npm install

## Create Environment File
Create .env

MONGO_URI=your_mongodb_connection_string
PORT=5000

## Start Development Server

npm run dev

Server will run on:

http://localhost:5000
```
# API Endpoints

## Add Tree
```
POST /trees

Request Body:

{
  "speciesName": "Neem",
  "latitude": 28.6139,
  "longitude": 77.209,
  "plantingDate": "2026-05-01",
  "healthStatus": "Good"
}

Get All Trees
GET /trees
Filter Trees
GET /trees?species=Neem
GET /trees?health=Good
```
## Update Health Status
```
PUT /trees/:id

Request Body:

{
  "healthStatus": "Fair"
}
Get Statistics
GET /trees/stats

Returns:

Total trees
Trees by species
Trees by health category
Percentage of trees in Good health
```
# Author
```
Shivanshu Jaiswal

Frontend & Mobile Developer

React
React Native
Node.js
MongoDB
```
