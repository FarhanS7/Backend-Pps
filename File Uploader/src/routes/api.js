//we will write our api here
//we will use multer as middleware

import * as FileUploadController from ".../controller/FileUploadController.js";
import express from "express";
import upload from "../middleware/";
const router = express.Router();

//fileUpload

router.post(
  "/file-upload", //first parameter is  this route
  upload.array("file", 20), // upload.array is a middleware and it is for multiple file upload
  FileUploadController.fileUpload // this is controller
);

export default router;
