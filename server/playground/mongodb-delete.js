//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://nodemongo:node2018@ds121189.mlab.com:21189/nodemongo',
	(err,client)=>{
	if(err){
		return console.log("+++===>"+err);
	}
	console.log('connected to MongoDB server');
	const db=client.db('nodemongo');
	
	
	db.collection('articlemodels').deleteMany({title:"ArticleReader"}).then((result)=>{
		console.log(result);
		
	},(err)=>{
		console.log("===>"+err);
	});
	
});