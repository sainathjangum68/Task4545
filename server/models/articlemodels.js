const mongoose = require('mongoose');
//const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');


var UserSchema = new mongoose.Schema({
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
   // required:true
  },
  updateDate:{
    //type:Date,
     type: String,
   // required:true
  }
  ,
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc12345').toString();

  user.tokens.push({access, token});

  return user.save().then(() => {
    return token;
  });
};

 UserSchema.statics.findByTokenAndDelete = function (token) {

  var User = this;
  var decoded;
  console.log("iam in fbtd");
  try {
    decoded = jwt.verify(token, 'abc12345');
  } catch (e) {
    console.log('catch -1');
    return Promise.reject();
  }
  console.log('iam in foar');
  return User.findOneAndRemove({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};


var articlemodels = mongoose.model('articlemodels', UserSchema);

//module.exports = {User}
module.exports = {articlemodels};
