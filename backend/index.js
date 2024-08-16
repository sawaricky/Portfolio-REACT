const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// MongoDB Connection
const dbURI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Models
const ProjectSchema = new mongoose.Schema({
  id: Number,
  project_name: String,
  project_thumbnail: String,
  project_url: String,
  project_description: String,
  project_languages: String
});

const SkillSchema = new mongoose.Schema({
  id: Number,
  skill_name: String,
  skill_icon: String
});

const Project = mongoose.model('Project', ProjectSchema);
const Skill = mongoose.model('Skill', SkillSchema);


app.use(cors());
app.use(express.json());
// projects
app.get('/projects', async (req, res) => {
    try {
      const projects = await Project.find();
      console.log(projects)
      res.json(projects);
      console.log(projects)
      
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  // skills
  app.get('/skills', async (req, res) => {
    try {
      const skills = await Skill.find();
      console.log(skills)
      res.json(skills);
      console.log(skills)
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
