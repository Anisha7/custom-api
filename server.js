var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Classes = require('./api/models/classes'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// //middleware
// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
//   });

// Hard-coding: Adding data to the data base
// let Task = require('/models/todoListModel');

Classes.find({name: 'back-end-web-1.1'}).then(found => {
    if (found.length == 0) {
        Classes.insertMany([
            {
                name: 'back-end-web-1.1',
                tasks: [
                    {
                        name: 'gif-search',
                        Created_date: new Date("2018-07-25"),
                        status: 'completed'
                    },
                    {
                        name: 'rotten-potatoes',
                        Created_date: new Date("2018-07-25"),
                        status: 'completed'
                    },
                    {
                        name: 'contractor-project',
                        Created_date: new Date("2018-07-25"),
                        status: 'completed'
                    }
                ]
            },
            {
                name: 'back-end-web-1.2',
                tasks: [
                    {
                        name: 'animal-api',
                        Created_date: new Date("2018-09-25"),
                        status: 'completed'
                    },
                    {
                        name: 'reddit-clone',
                        Created_date: new Date("2018-09-25"),
                        status: 'completed'
                    },
                    {
                        name: 'custom-api',
                        Created_date: new Date("2018-09-25"),
                        status: 'completed'
                    }
                ]
                
            },
            {
                name: 'CS-1.2',
                tasks: [
                    {
                        name: 'tweet-generator',
                        Created_date: new Date("2018-10-25"),
                        status: 'completed'
                    }
                ]
            }
    
        ])
    }
})


var routes = require('./api/controllers/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);