import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
