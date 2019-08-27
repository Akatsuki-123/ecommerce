const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

// Define collection and schema
var users = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   password: {
    type: String
    },
    cart: {
        type: Array
     },
     adresses: {
        type: Array
     }
}, {
   collection: 'users'
})

users.statics.hashPassword = function(password){
   return bcrypt.hashSync(password,10);
}

users.methods.isValid = function(hashedpassword){
   return bcrypt.compareSync(hashedpassword,10);
}

module.exports = mongoose.model('user', users)