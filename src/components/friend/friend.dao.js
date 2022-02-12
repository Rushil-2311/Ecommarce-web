const Friends = require("./friend.model");

module.exports.addFriend = async (props) => {
  try {
    const user = new Friends(buildSaveRequestJson(props));
    const result = await user.save();
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.getUserFriends = async (userId, props) => {
  try {
    const { limit = 10, skip = 0 } = props;
    const users = Friends.find({ user: userId })
      .select("friend")
      .populate("friend")
      .limit(Number(limit))
      .skip(Number(skip))
      .exec();
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports.removeFriend = async ({ user, friend }) => {
  try {
    const friendDeleted = await Friends.findOneAndDelete({ user, friend });
    return friendDeleted;
  } catch (error) {
    throw error;
  }
};

module.exports.getFriendsIds = async (props) => {
  try {
    const friends = await Friends.find(props).lean();
    return friends;
  } catch (error) {
    throw error;
  }
};

module.exports.getFriendsCount = async (props) => {
  try {
    const friends = await Friends.count(props);
    return friends;
  } catch (error) {
    throw error;
  }
};
