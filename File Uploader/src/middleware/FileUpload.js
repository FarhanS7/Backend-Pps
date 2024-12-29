import fs from "fs";
import multer from "multer";

const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const FileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, "api-img__" + Date.now() + "__" + file.originalname);
  },
});

let upload = multer({ storage: FileStorageEngine });
export default upload;
