export const fileUpload = (req, res) => {
  try {
    if (!req.files.length > 0) {
      res.status(200).json({
        message: "File uploaded successfully",
        file: req.files,
      });
    }
  } catch (e) {
    console.error(e);
    req.status(500).send("server Error");
  }
};
//ensuring if the file is
