import app from "./app.js";

const port = 5000;
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});