import express from "express";
import * as GitController from "../app/controllers/GitController.js";
const router = express.Router();

router.get("/:owner/:repo", GitController.downloadRepo);

export default router;
