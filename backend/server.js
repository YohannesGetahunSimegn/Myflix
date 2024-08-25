import rateLimit from "express-rate-limit";
import helmet from "helmet";
import expressMongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";

import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";
import { protectRoute } from "./middleware/protectRoute.js";

import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = ENV_VARS.PORT;
const __dirname = path.resolve();

app.use(helmet()); // Set security HTTP headers

app.use(express.json()); // allow as to parse req.body
app.use(cookieParser()); // allows to parse cookies from req

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP, please try again in an hour!",
});

app.use("/api", limiter); // Limit request from same IP

app.use(expressMongoSanitize()); // Data sanitization against NoSQL query injection

app.use(xss()); //Data sanitization

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

if (ENV_VARS.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
app.listen(5000, () => {
  console.log("Server started at http://localhost:" + PORT);
  connectDB();
});
