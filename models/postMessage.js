import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  message: {
    type: String,
  },
  creator: {
    type: String,
  },
  tags: {
    type: [String],
  },
  file: {
    type: String,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Posts = mongoose.model("Posts", postSchema);
export default Posts;
