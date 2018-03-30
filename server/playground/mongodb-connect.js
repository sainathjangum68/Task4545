
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://nodemongo:node2018@ds121189.mlab.com:21189/nodemongo',(err,client)=>{
	if(err){
		return console.log(err);
	}
	
	client.close();
});