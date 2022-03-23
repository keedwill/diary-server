import express from "express";
import "express-async-errors";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import  postRoutes  from "./routes/posts.js";
import DatabaseConnectionError from "./errors/DatabaseConnectionError.js";
import errorHandler from "./middlewares/error-handler.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("./posts", postRoutes);
app.use(errorHandler);

const DB_URL =
  "mongodb+srv://Keedwill:frehky5214@cluster0.4wv9c.mongodb.net/princediary?retryWrites=true";
const PORT = process.env.PORT || 5000;

const startApp = async () => {
  try {
    // connect to Database

    await mongoose.connect(DB_URL);
    console.log("Database Connected");
  } catch (error) {
    throw new DatabaseConnectionError(error);
  }
  app.listen(PORT, () => {
    console.log(`Port starts on ${PORT} `);
  });
};

startApp();
