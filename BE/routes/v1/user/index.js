const addUser = require('./add-user');
const getUserList = require('./get-user');
const getProfile = require('./get-user-profile')
const updateUser = require("./update-user")
const deleteUser = require("./delete-user")

module.exports = [addUser,getUserList,getProfile,updateUser,deleteUser];