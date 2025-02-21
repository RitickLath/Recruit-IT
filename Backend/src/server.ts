import express from "express";
import "dotenv/config";
import connectDatabase from "./config";

// connectDatabase();

const app = express();

app.use(express.json());
