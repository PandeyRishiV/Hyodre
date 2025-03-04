const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(cors()); // TODO Configure cors
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});