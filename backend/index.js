import express from "express";
import cors from "cors";

const app = express();
const port = 8000;
app.use(cors());

const todos = [
  { title: "code 10 hoursa day", desc: "code is fun" },
  { title: "code 10 hoursa day", desc: "code is fun" },
  { title: "code 10 hoursa day", desc: "code is fun" },
  { title: "code 10 hoursa day", desc: "code is fun" },
  { title: "code 10 hoursa day", desc: "code is fun" },
  { title: "code 10 hoursa day", desc: "code is fun" },
  { title: "code 10 hoursa day", desc: "code is fun" },
];
// end points

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hustle harder" });
});

app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
