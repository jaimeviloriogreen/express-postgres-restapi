import express from "express";
import { Error404 } from "../controller/error404.js";

const router = express.Router();

router.get("/*", Error404);

export default router;