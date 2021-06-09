import express from "express";
import dotenv from "dotenv";
import * as path from "path";
dotenv.config({ path: path.join(__dirname, "..", "config", ".env.local") });
import "./database/database";

const server = express();
// @ts-ignore
const PORT = process.env.PORT | 5000;

server.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
