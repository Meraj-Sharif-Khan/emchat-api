import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import { app, server } from "./socket/socket.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const port = process.env.PORT;

const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
app.use(
  cors({
    credentials: true,
    origin: frontendUrl,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(port, () => {
  console.log("Server is running on port:", port);
  connectDB();
});
