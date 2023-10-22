import express from "express";
import { v4 as uuidv4 } from "uuid";
import {
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/user.js";

uuidv4();

const router = express.Router();

let users = [];

//routes are staring from /users
router.get("/", (req, res) => {
  res.send(users);
});

//create user
router.post("/", createUser);

// /user/2
router.get("/:id", getUser);

//delete user
router.delete("/:id", deleteUser);

//update
router.patch("/:id", updateUser);

export default router;
