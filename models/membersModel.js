const mongoose = require('mongoose');

const membersSchema = new mongoose.Schema({
   NAME: String,
   CONTACT: String,
   DIGITAL_ADD: String,
   DOB: Date,
   AUXILIARY: String,
   SHEPHERD: String,
   WORK: String,
   PICTURE: String,
   gender:String,
}) 

const membersModel = mongoose.model('members',membersSchema);

module.exports = membersModel;