const express = require("express");
const dotenv = require("dotenv");
const home = require("./routes/home");

// Init
dotenv.config();
const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/", home);
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
