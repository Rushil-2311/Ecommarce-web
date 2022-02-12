const mongoose = require('mongoose');

const friendSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  friend: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  is_active: {
    type: Boolean,
    required: true,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
}, {
  toObject: {
  virtuals: true
  },
  toJSON: {
  virtuals: true 
  }
});

module.exports = mongoose.model('Friends', friendSchema);
