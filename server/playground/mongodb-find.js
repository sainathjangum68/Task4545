
var express = require('express');
var bodyParser = require('body-parser');
var app = express(),id;
app.use(bodyParser.json());

//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://nodemongo:node2018@ds121189.mlab.com:21189/nodemongo',
	(err,client)=>{
	if(err){
		return console.log(err);
	}
	console.log('connected to MongoDB server');
	const db=client.db('nodemongo');


	 app.post('/sai', (req, res) => {

	 	// Finding docs by Using Tags
//      tags=req.body.tags;
//      db.collection('articlemodels').find({tags}).toArray().then((docs)=>{
// 		console.log(docs,undefined,2);
		
// 	},(err)=>{
// 		console.log("===>"+err);
// 	});
	
// });

	//Finding docs by using title
// 	title=req.body.title;
//      db.collection('articlemodels').find({title}).toArray().then((docs)=>{
// 		console.log(JSON.stringify(docs,undefined,2));
		
// 	},(err)=>{
// 		console.log("===>"+err);
// 	});
// });
   
// });

// Finding docs by Using id
id=req.body.id;
console.log(id);
     db.collection('articlemodels').find(new ObjectID(id)).toArray().then((docs)=>{
		console.log(docs);
		
	},(err)=>{
		console.log("===>"+err);
	});
});
   
});
   


app.listen(3001, () => {
  console.log('Started on port 3000');
});

module.exports={app};



