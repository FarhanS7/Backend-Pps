import express from "express";
import * as ImageFileConverterController from "../app/controllers/ImageFileConverterController.js";
import upload from "../app/middlewares/FileUpload.js";
const router = express.Router();

router.post(
  "/upload-file",
  upload.single("file"), // coming from middleware FileUpload.js .single("file") is the name of the file input field 
  ImageFileConverterController.fileConverter
);

export default router;
