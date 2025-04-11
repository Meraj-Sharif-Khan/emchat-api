import express from "express";
import protectRoute from "../middleware/protectroute.js";
import { getUsers } from "../controllers/user.controller.js";

const route = express.Router();

route.get("/", protectRoute, getUsers);

export default route;
