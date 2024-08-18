import express from "express";

const router = express.Router();

router.get("/api/v1/signup", (req, res) => {
  res.send("Signup route");
});

router.get("/api/v1/login", (req, res) => {
  res.send("Login route");
});

router.get("/api/v1/logout", (req, res) => {
  res.send("Logout route");
});

export default router;
