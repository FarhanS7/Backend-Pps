import cors from "cors";
import express from "express";
import router from "./src/routes/api.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "500mb" }));
app.use("/api", router);
app.use("/uploads", express.static("uploads")); // Serve files via /uploads route

export default app;
