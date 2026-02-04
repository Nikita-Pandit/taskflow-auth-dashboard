

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./src/routes/auth");
const taskRoutes = require("./src/routes/tasks");
const profileRoutes = require("./src/routes/profile");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/me", profileRoutes);


app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);
