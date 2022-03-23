import express from "express";
import { getPosts, createPosts } from "../controllers/posts.js";

const router = express.Router();

router.get("/", async (req, res) => {
  await getPosts(req, res);
});

router.post("/", async (req, res) => {
  await createPosts(req, res);
});

export default router;
