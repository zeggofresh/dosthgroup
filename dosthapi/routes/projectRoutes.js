import express from "express";
import multer from "multer";
import { addProject, getProjects } from "../controllers/projectController.js";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Routes
router.post("/add", upload.single("image"), addProject);
router.get("/", getProjects);

export default router;
