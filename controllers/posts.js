import ServerError from "../errors/server-error.js";
import Posts from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Posts.find();
    return res.status(200).json(posts);
  } catch (error) {
    throw new ServerError(error.message);
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new Posts(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    throw new ServerError(error.message);
  }
};
