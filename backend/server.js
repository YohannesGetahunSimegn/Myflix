import express from "express";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
