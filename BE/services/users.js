const express = require("express");
const app = express();
const USER = require('../collection/user/db-schema')
const mongoose = require("mongoose")

module.exports.addData = async(payloadData) => {
    const user = new USER(payloadData)
    const userSaved = await user.save(payloadData)
    console.log(userSaved)
}

module.exports.getData = async() => {
    const allUsers = await USER.find({ is_deleted: false});
    return allUsers;  
}

module.exports.getProfile = async(userId) => {
    const userData = await USER.findOne({ is_deleted: false, _id: mongoose.Types.ObjectId(userId)});
    return userData;  
}

module.exports.updateData = async(payloadData) => {
    const updateUser = await USER.findByIdAndUpdate(payloadData.id, {
        $set: {
            name: payloadData.name
        }
    }, { new: true})
    return updateUser
}

module.exports.deleteUser = async(userId) => {
    const deletedUser = await USER.findByIdAndUpdate(userId, {
        $set: {
            is_deleted: true
        }
    })
    return
}