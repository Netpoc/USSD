// server/models/userModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const adminSchema = new Schema({
 email: {
  type: String,
  required: true,
  trim: true
 },
 password: {
  type: String,
  required: true
 },
 role: {
  type: String,
  default: 'basic',
  enum: ["basic", "supervisor", "admin"]
 },
 accessToken: {
  type: String
 }
});
 
const User = mongoose.model('Admin', adminSchema);
 
module.exports = User;