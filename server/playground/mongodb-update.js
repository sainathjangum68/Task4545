

// var express = require('express');
// var bodyParser = require('body-parser');
// const {MongoClient,ObjectID}=require('mongodb');
// var app = express();

// app.use(bodyParser.json());

//  MongoClient.connect('mongodb://nodemongo:node2018@ds121189.mlab.com:21189/nodemongo',
//   (err,client)=>{
//   if(err){
//     return console.log(err);
//   }
//   console.log('connected to MongoDB server');
//   const db=client.db('nodemongo');
//   app.post('/sai', (req, res) => {
//   // var art = new articlemodels({
//   //   title: req.body.title,
//   //   tags:req.body.tags,
//   //   body:req.body.body,
//   //   author:req.body.body,
//   //   creationdate:req.body.creationdate,
//   //   updateDate:req.body.updateDate
//   // });
//   var id=req.body.id;

// // console.log(req.body);
// //   art.save().then((doc) => {
// //     console.log(doc);
// //     res.send(doc);
// //   }, (e) => {
// //     console.log(e);
// //     res.status(400).send(e);
// //   });
// // });
  
//   db.collection('articlemodels').findOneAndUpdate({
//     _id:new ObjectID(id)
//   },{
      
//       $set:{
//           author:"sukumar"
//          }
//   }).then((result)=>{
//     console.log(result);
    
//   },(err)=>{
//     console.log("===>"+err);
//   });
   
// });
// app.listen(3001, () => {
//   console.log('Started on port 3000');
// });

// module.exports={app};






var express = require('express');
var bodyParser = require('body-parser');
const {MongoClient,ObjectID}=require('mongodb');
var app = express(),id;

app.use(bodyParser.json());

 MongoClient.connect('mongodb://nodemongo:node2018@ds121189.mlab.com:21189/nodemongo',
  (err,client)=>{
  if(err){
    return console.log(err);
  }
  console.log('connected to MongoDB server');
  const db=client.db('nodemongo');
  app.post('/sai', (req, res) => {


     id=req.body.id;


     db.collection('articlemodels').findOneAndUpdate({
    _id:new ObjectID(id)
  },{
      
      $set:{
          title:"ArticleReader68686868"
         }
  }).then((result)=>{
    console.log(result);
    
  },(err)=>{
    console.log("===>"+err);
  });
   
});

   
});
//   db.collection('articlemodels').findOneAndUpdate({
//     _id:new ObjectID(id)
//   },{
      
//       $set:{
//           author:"sukumar"
//          }
//   }).then((result)=>{
//     console.log(result);
    
//   },(err)=>{
//     console.log("===>"+err);
//   });
   
// });
app.listen(3001, () => {
  console.log('Started on port 3000');
});

module.exports={app};