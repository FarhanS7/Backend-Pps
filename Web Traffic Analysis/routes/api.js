import express from "express";
import * as TrafficController from "../app/controllers/TrafficController.js";
const router = express.Router();

router.get("/view-traffic", TrafficController.viewTraffic);

export default router;
