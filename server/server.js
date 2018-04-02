var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');

var {ObjectID}=require('mongodb');
var {articlemodels} = require('./models/articleModel');
//var {customModel} = require('./models/customModel');

var app = express();

app.use(bodyParser.json());
// creates a new document in server(mLab)
app.post('/sai', (req, res) => {
  var art = new articlemodels({
    title: req.body.title,
    tags:req.body.tags,
    body:req.body.body,
    author:req.body.body,
    creationdate:req.body.creationdate,
    updateDate:req.body.updateDate
  });
console.log(req.body);
  art.save().then((doc) => {
    console.log(doc);
    res.send(doc);
  }, (e) => {
    console.log(e);
    res.status(400).send(e);
  });
});
 
// app.get('/sai', (req, res) => {
//  articlemodels.find().then((a) => {
//     res.send({a});
//   }, (e) => {
//     res.status(400).send(e);
//   });
// });


app.get('/sai/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  articlemodels.findById(id).then((doc) => {
    if (!doc) {
      return res.status(404).send();
    }

    res.send({doc});
  }).catch((e) => {
    res.status(400).send();
  });
});


// app.get('/sai',(req,res)=>{
// 	articleModel1.find().then(()=>{
// 		res.send({sai});
// 	},(e)=>{
// 		res.status(400).send(e);
// 	})
// });
// var art = new article({
//     title:"ArticleReader",
//     tags:["Article","ReaderBook","LatestArticles"],
//     body:"some body content",
//     author:'sainath',
//     creationdate:12-11-2011,
//     updateDate:13-12-2012 
//   });

//   art.save().then((doc) => {
//   	console.log(doc);
    
//   }, (e) => {
//     console.log(e);
//   });
app.listen(3001, () => {
  console.log('Started on port 3000');
});

module.exports={app};