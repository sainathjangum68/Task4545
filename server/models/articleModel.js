var mongoose = require('mongoose');

var articlemodels= mongoose.model('articlemodels', {
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  tags: {
    type: Array
    // default: false
  },
  body: {
    type: String
   // default: null
  },
  author: {
    type: String
   // default: null
  },
  creationdate: {
    //type: Date,
     type: String,
    required:true
  },
  updateDate:{
    //type:Date,
     type: String,
    required:true
  }
});

module.exports = {articlemodels};