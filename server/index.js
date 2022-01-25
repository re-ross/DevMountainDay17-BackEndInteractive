const express = require("express");
const cors = require("cors");
const {
  getAllMovies,
  createMovie,
  deleteMovie,
  updateMovie,
} = require("./movieController.js");

const app = express();
//middleware
app.use(cors());
app.use(express.json());

app.get("/api/movies", getAllMovies);
app.post("/api/movies", createMovie);
app.delete("/api/movies/:id", deleteMovie);
app.put("/api/movies/:id", updateMovie);
const port = 4004;

app.listen(port, () => console.log(`server running on ${port}`));
