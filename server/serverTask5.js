
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');

var {articlemodels} = require('./models/articlemodels');
//var {authenticate}=require('./middleware/authenticate');
var app = express();

app.use(bodyParser.json());


app.delete('/articles/:id',(req, res) => {
  
   var token=req.header('x-auth');
  console.log(token);
  

  articlemodels.findByTokenAndDelete(token).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});
//   console.log(deletedArt);
// if (!deletedArt) {
//       return res.status(404).send();
//     }
//     return res.status(200).send();
// });
  
//

  
// app.patch('/articles/:id', (req, res) => {
//   var id = req.params.id;
//   console.log(id);
//   var body = _.pick(req.body, ['title','author']);
//   console.log(body);
//  var token=req.header('x-auth');
// console.log(token);


//   // if (_.isBoolean(body.completed) && body.completed) {
//   //   body.completedAt = new Date().getTime();
//   // } else {
//   //   body.completed = false;
//   //   body.completedAt = null;
//   // }
//   var decoded;

//   // try {
//   //   decoded = jwt.verify(token, 'abc12345');
//   // } catch (e) {
//   //   // return Promise((resolve,reject)=>{reject();} );
//   //   console.log('catch error-1');
//   //   return Promise.reject();
//   // }
// console.log("iam in fbiau");
//  articlemodels.findByIdAndUpdate(id).then((todo) => {
//     if (!todo) {
//       console.log('404-2');
//       return res.status(404).send();
//     }

//     res.send({todo});
//   }).catch((e) => {
//     console.log('catch error-2');
//     res.status(400).send();
//   })
// });

app.patch('/articles/:id', (req, res) => {
 var id = req.params.id;
 console.log(id);
 var body = _.pick(req.body, ['title', 'author']);
articlemodels.findByIdAndUpdate(id, {
   $set: body
 }
 , {
   new: true //returnOriginal:false
 }
 ).then((updatedArticle) => {
   if (!updatedArticle) {
     return res.status(404).send();
   }
   res.send({
     updatedArticle
   });
 }).catch((e) => {
   res.status(400).send();
 })
});
  

// POST /users
app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['title', "tags",'author']);
 // what is use of it
 console.log(body.title+" === "+body.tags);
  var user = new articlemodels(body);
// why we are saving here
  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);

  }).catch((e) => {
    res.status(400).send(e);
  })
});

app.listen(3001, () => {
  console.log(`Started up at port `);
});

module.exports = {app};
