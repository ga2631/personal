// Package
const express = require("express");
const cors = require("cors");

// Initial app
const app = express();

// Middleware
app.use(cors());

// Start app
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
