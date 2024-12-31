import fs from "fs";
import path from "path";
import sharp from "sharp";

export const fileConverter = async (req, res) => {
  try {
    //! 1 file existing check
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    //! 2 make formatting
    const format = req.query.format || "png"; // get format from query string or default to png format

    //! 3 make folder uploads/converter
    const inputFile = req.file.path; // file path from multer middleware
    const converterDir = path.join(process.cwd(), "uploads", "converter"); // create folder converter in uploads folder if not exist

    if (!fs.existsSync(converterDir)) {
      fs.mkdirSync(converterDir, { recursive: true });
    } // create folder converter in uploads folder if not exist

    const outputFile = path.join(
      converterDir,
      `converted-${Date.now()}.${format}`
    );

    //! 4 convert file to png format
    await sharp(inputFile).png().toFile(outputFile);

    //! 5 send response to client
    res.json({
      message: "Image converted successfully",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server Error");
  }
};
