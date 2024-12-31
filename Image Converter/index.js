import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import {
  MAX_JSON_SIZE,
  PORT,
  REQUEST_NUMBER,
  REQUEST_TIME,
  URL_ENCODE,
  WEB_CACHE,
} from "./app/config/config.js"; // Import from config.js file in app/config folder   
import router from "./routes/api.js";

const app = express();

// App Use Default Middleware
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(helmet());
app.use(cookieParser());

// App Use Limiter
const limiter = rateLimit({ windowMs: REQUEST_TIME, max: REQUEST_NUMBER }); // 20 minutes and 2000 requests limit 
app.use(limiter);

// Cache
app.set("etag", WEB_CACHE); // false

app.use("/api", router); // Use router from routes/api.js

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
