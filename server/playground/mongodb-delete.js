
var express = require('express');
var bodyParser = require('body-parser');
var app = express(),id;
app.use(bodyParser.json());

//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://nodemongo:node2018@ds121189.mlab.com:21189/nodemongo',
	(err,client)=>{
	if(err){
		return console.log("+++===>"+err);
	}
	console.log('connected to MongoDB server');
	const db=client.db('nodemongo');
	
	
// 	db.collection('articlemodels').deleteMany({title:"ArticleReader"}).then((result)=>{
// 		console.log(result);
		
// 	},(err)=>{
// 		console.log("===>"+err);
// 	});
	
// });

	 app.post('/sai', (req, res) => {


     id=req.body.id;
     console.log("before");
//  deleting by Using Id
     
	db.collection('articlemodels').findOneAndDelete(new ObjectID(id)).then((result)=>{
		console.log("After====>"+JSON.stringify(result));
		
	},(err)=>{
		console.log("===>"+err);
	});
	
});

});


app.listen(3001, () => {
  console.log('Started on port 3000');
});

module.exports={app};

