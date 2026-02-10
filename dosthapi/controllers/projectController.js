import Project from "../models/Project.js";

export const addProject = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!title || !description || !image) {
      return res.status(400).json({ message: "All fields required" });
    }

    const project = new Project({ title, description, image });
    await project.save();

    res.status(201).json({ message: "Project added successfully", project });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
