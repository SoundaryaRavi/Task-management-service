const taskModel = require("../models/task.model");

const findAll = async (data) => {
  try {
    return await taskModel
      .find({ createdBy: data.userId })
      .skip(data.offset)
      .limit(data.limit)
      .sort({ createdAt: -1 });
  } catch (error) {
    throw error;
  }
};

const findOne = async (id) => {
  try {
    return await taskModel.findOne({ id });
  } catch (error) {
    throw error;
  }
};

const create = async (data) => {
  try {
    let newTask = new taskModel(data);
    return await newTask.save();
  } catch (error) {
    throw error;
  }
};
const update = async (id, data) => {
  try {
    return await taskModel.findByIdAndUpdate( id, { $set: data }, { new: true } );
  } catch (error) {
    throw error;
  }
};

module.exports = { findAll, findOne, create, update };
