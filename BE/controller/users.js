const express = require("express");
const SERVICE = require('../services/users');
const app = express();


module.exports.addData = async (req, res) => {
    let payload = req.body;
    try {
      const data = await SERVICE.addData(payload);
      res.status(200).json({status: 200, message: 'Success', data: {}});
    } catch (error) {
      console.log(error)
      res.status(400).json({status: 400, message: 'Error', data: {}});
    }
  };

  module.exports.getData = async (req, res) => {
    //let payload = req.body;
    try {
      const result = await SERVICE.getData();
      res.status(200).json({status: 200, message: 'Success', data: result});
    } catch (error) {
      console.log(error)
      res.status(400).json({status: 400, message: 'Error', data: []});
    }
  };

  module.exports.getProfile = async (req, res) => {
    let userId = req.params;
    try {
      const result = await SERVICE.getProfile(userId);
      res.status(200).json({status: 200, message: 'Success', data: result});
    } catch (error) {
      console.log(error)
      res.status(400).json({status: 400, message: 'Error', data: {}});
    }
  };
  
  module.exports.updateData = async (req, res) => {
    let payload = req.body;
    try {
      const result = await SERVICE.updateData(payload);
      res.status(200).json({status: 200, message: 'Success', data: result});
    } catch (error) {
      console.log(error)
      res.status(400).json({status: 400, message: 'Error', data: {}});
    }
  };

  
  module.exports.deleteUser = async (req, res) => {
    let userId = req.params.id;
    try {
      const result = await SERVICE.deleteUser(userId);
      res.status(200).json({status: 200, message: 'Success', data: {}});
    } catch (error) {
      console.log(error)
      res.status(400).json({status: 400, message: 'Error', data: {}});
    }
  };