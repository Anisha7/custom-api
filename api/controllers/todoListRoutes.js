'use strict';
module.exports = function(app) {
//var todoList = require('../models/todoListModel');
let Task = require('../models/todoListModel');
let Class = require('../models/classes');
// todoList Routes
app.get("/", (req, res) => {
  
  res.redirect("/tasks")
})

app.get("/classes", (req, res) => {
  Class.find({}, function(err, task) {
    if (err) {
      res.send(err);
    }
    res.json(task)
  })
});

app.get("/classes/:name", (req, res) => {
  console.log(req.params.name)
  Class.find({name:req.params.name}, function(err, clas) {
    console.log(clas)
    if (err) {
      res.send(err);
    }
    console.log(clas[0].tasks)
    res.json(clas[0].tasks)
  })
});

// app.get("/classes/:name/:taskname", (req, res) => {
//   console.log(req.params.taskname)
//   Class.find({name:req.params.name}, function(err, clas) {
//     (clas[0].tasks).find({name:req.params.taskname}, function(err, task) {
//       if (err) {
//         res.send(err);
//       }
//       console.log(task)
//       res.json(task)
//     })
//   })
// });


// rough
app.get("/tasks", (req, res) => {
    Task.find({}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    })
});
  
app.post("/tasks", (req, res) => {
    var new_task = new Task(req.body);
    new_task.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    })
});

app.get('/tasks/:taskId', (req, res) => {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  })
});

app.put('/tasks/:taskId', (req, res) => {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  })
});

app.delete('/tasks/:taskId', (req, res) => {
  Task.remove({_id: req.params.taskId}, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  })
});

}