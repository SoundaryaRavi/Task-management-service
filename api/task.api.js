const { handleParamErr } = require("../services/error.service");
const taskService = require("../services/task.service");
const { HTTP_STATUS_CODES } = require("../constants/constants");

const createTask = async (data, userId) => {
  try {
    if (!data || !data.title || userId) {
      return handleParamErr();
    }
    return await taskService.create({
      title: data.title,
      description: data.description ? data.description : "",
      status: data.status ? data.status : false,
      createdBy: userId,
    });
  } catch (error) {
    throw {
      status: HTTP_STATUS.ERROR,
      message: error,
    };
  }
};

const fetchAllTasks = async (data, userId) => {
  try {
    let limit = data && data.limit ? data.limit : 10;
    let offset = data && data.offset ? data.offset : 0;
    return await taskService.findAll({ limit, offset, userId });
  } catch (error) {
    throw {
      status: HTTP_STATUS.ERROR,
      message: error,
    };
  }
};

const fetchOneTask = async (id) => {
  try {
    if (!id) {
      return handleParamErr();
    }
    const task = await taskService.findOne(id);
    if (!task) {
      return {
        message: "Task not found",
        status: HTTP_STATUS_CODES.NOT_FOUND,
      };
    }
    return {
      task,
      message: "Task fetched successfully",
    };
  } catch (error) {
    throw {
      status: HTTP_STATUS.ERROR,
      message: error,
    };
  }
};
const updateTask = async (id, data) => {
  try {
    if (!id || !data) {
      return handleParamErr();
    }
    return await taskService.update(id, data);
  } catch (error) {
    throw {
      status: HTTP_STATUS.ERROR,
      message: error,
    };
  }
};
const deleteTask = async (id) => {
  try {
    if (!id) {
      return handleParamErr();
    }
    return await taskService.update(id, { status: false });
  } catch (error) {
    throw {
      status: HTTP_STATUS.ERROR,
      message: error,
    };
  }
};

module.exports = {
  createTask,
  fetchAllTasks,
  fetchOneTask,
  updateTask,
  deleteTask,
};
