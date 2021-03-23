const cors = require("cors");
const db = require("./conn");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const todoModel = require("./todo");

app.use(bodyParser.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const Task = req.body.task;
  const tasktodo = new todoModel({ task: Task });

  try {
    await tasktodo.save();
    res.send("...................Inserted Data...................");
  } catch (err) {
    console.log(err);
  }
});

app.get("/todo", async (req, res) => {
  todoModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.put("/todo/:id", async (req, res) => {
  const completed = req.body.completed;
  const id = req.params.id;
  try {
    await todoModel.findById(id, (err, updatedtask) => {
      updatedtask.completed = completed;
      updatedtask.save();
      res.send("updated");
    });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/todo/:id", async (req, res) => {
  const id = req.params.id;
  await todoModel.findByIdAndDelete(id);
  console.log("deletedddddddd");
  res.send("deleted");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
