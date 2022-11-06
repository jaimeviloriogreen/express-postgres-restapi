import express from "express";
import { apiGet, apiPost, apiDelete, apiPut } from "../controller/api.js";

const router = express.Router();

router.get("/", apiGet);
router.post("/", apiPost);
router.delete("/", apiDelete);
router.put("/", apiPut);

export default router;