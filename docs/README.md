# Classes and Tasks API

This project tracks assigments for each class at MakeSchool 
and tracks whether or not it has been completed

## Instructions

To open the project, go to 
```
https://limitless-brushlands-41600.herokuapp.com/
```

This page will redirect you to data for all the classes at Make School.
```
path '/classes' to see all classes and their assignments
```
The data for each class consists of the name of the class and
a list of tasks assigned in that class.


If you would like to see the tasks for a particular class, 
go to the following path using the name of that class as classname 
as specified in the data:
```
go to path '/classes/:classname' to see all taksks for a particular class
```

Each task consists of the name of the task, the date it was assigned, 
and a status of what the class progress is for that task.
