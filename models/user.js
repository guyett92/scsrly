const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: String,
    goals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Goal',
        default: []
    }],
    bio: {
        type: String
    },
    avatarURL: String
}, {timestamps: true});

userSchema.set('toJSON', {
    transform: function(doc, ret) {
      // remove the password property when serializing doc to JSON
      delete ret.password;
      return ret;
    }
  });
  
  userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb);
  };
  
  userSchema.pre('save', function(next) {
    // Reference current document
    const user = this;
    if (!user.isModified('password')) return next();
    // Password has been changed, salt and hash
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
      if(err) return next(err);
      // Replace user's password with the hash
      user.password = hash;
      next();
    })
  })
  
  module.exports = mongoose.model('User', userSchema);