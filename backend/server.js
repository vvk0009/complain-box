const express = require("express");
const connectDB = require("./config/dbConfig");
require("dotenv").config()

const app = express();

const PORT = process.env.PORT || 8080;

connectDB();

app.use(express.json)
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.json({ message: "welcome to complain box" });
});

app.use("/api/user", require("./routes/userRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
