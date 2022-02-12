const Notifications = require('./notification.model');

const buildSaveNotificationJson = props => {
  const json = {};
  json.user = props.user;
  json.other_user = props.other_user;
  json.message_type = props.message_type;
  json.request_id = props.request_id;
  json.type = props.type || 'request'
  return json;
};

module.exports.addNotification = async props => {
  try {
    const notification = new Notifications(buildSaveNotificationJson(props));
    const result = await notification.save()
    return result
  } catch (error) {
    throw error;
  }
};

module.exports.deleteNotification = async (id) => {
  try {
    const notification = await Notifications
    .findOneAndUpdate({_id: id}, {is_active: false}, {new: true})
    return notification
  } catch (error) {
    throw error;
  }
}

module.exports.getUserNotifications = async (userId) => {
  try {
    const notification = await Notifications
    .find({ user: userId, is_active: true })
    .populate({
      path: "other_user",
      select: "first_name last_name",
      populate : {
        path : 'pic',
      }
    })
    return notification
  } catch (error) {
    throw error;
  }
}

module.exports.existUserNotification = async (props) => {
  try {
    const notification = await Notifications
    .findOne(props)
    return notification
  } catch (error) {
    throw error;
  }
}