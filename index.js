// Libraries to import
const express = require('express');
const formidable = require('express-formidable');
const path = require('path');
const http = require('http');
const ejs = require('ejs');
const Promise = require('promise');
const MongoClient = require('mongodb').MongoClient;

// Web framework
const app = express();
app.set('view engine', 'ejs');
app.use(formidable());
app.use(express.static(path.join(__dirname, '/')));

// Connection strings
// #### CHANGE THIS TO YOUR GROUPS STRINGS ####
const dbName = "sac";
const uri = `mongodb+srv://sac:9rHs6KlwsjCCSrJN@joel-cluster-0.jt18y.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// HTTP server
const server = http.createServer(app);
server.listen(27015);

// Connect to database
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, promiseLibrary: Promise }).then(client => {

  // Set up collections
  const db = client.db(dbName);
  const usersCol = db.collection("users");
  const commentsCol = db.collection("comments");

  //commentsCol.deleteMany();

  // Root GET request
  app.get('/', function(req, res) {
    res.render('index', { root: '.' });
  });


  app.get('/journal', function(req, res) {
    commentsCol.find().toArray(function(err, items) {
      res.render('index', { root: '.', name: '', users: [], comments: items });
    });
  });
  
  app.get('/blank', function(req, res) {
    commentsCol.find().toArray(function(err, items) {
      res.render('blank', { root: '.', name: '', users: [], comments: items });
    });
  });

  app.post('/addcomment', function(req, res) {
    commentsCol.insertOne(
      { comment: req.fields['comment'], name: req.fields['name'] }
    ).then(function() {
      commentsCol.find().toArray(function(err, items) {
        console.log(items);
        res.render('blank', { root: '.', comments: items });
      });
    });
  });

  // Helper method for Ajax
  app.get('/name', function(req, res) {
    res.sendFile('js/name.json', { root: '.' });
  });
});