const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  other_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  request_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Requests'
  },
  message_type: {
    type: String,
    required: true,
    enum: ['accept_request', "send_request", "reject_request"]
  },
  type: {
    type: String,
    required: true,
    enum: ['request']
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

notificationSchema
.virtual('message')
.get(function () {
  if(this.message_type === "accept_request") {
    return "accepted your friend request"
  } else if(this.message_type === "send_request") {
    return "send you a friend request"
  } else if(this.message_type === "reject_request") {
    return "rejected your friend request"
  }
  return `https://${bucket}.s3.ap-south-1.amazonaws.com/profile/${this['_id']}/${this.file_name}`;
});

module.exports = mongoose.model('Notifications', notificationSchema);
