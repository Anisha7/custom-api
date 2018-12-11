'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const Tasks = require('./todoListModel.js');

var ClassSchema = new Schema({
  name: {
    type: String
  },
  tasks: [Tasks.schema]
});


module.exports = mongoose.model('Class', ClassSchema);