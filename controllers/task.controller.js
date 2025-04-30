const taskApi = require('../api/task.api');
const { HTTP_STATUS_CODES } = require('../constants/constants');
const createTask = async (req, res) => {
    try {
        const task = await taskApi.createTask(req.body, req.user);
        return await res.status(HTTP_STATUS_CODES.SUCCESS).json({ task });
    }
    catch (err) {
        return res.status(HTTP_STATUS_CODES.ERROR).send(err);
    }
}

const fetchAllTasks = async (req, res) => {
    try {
        const tasks = await taskApi.fetchAllTasks(req.body, req.user);
        return await res.status(HTTP_STATUS_CODES.SUCCESS).json({ tasks });
    }
    catch (err) {
        return res.status(HTTP_STATUS_CODES.ERROR).send(err);
    }
}

const fetchOneTask = async (req, res) => {
    try {
        const task = await taskApi.fetchOneTask(req.body);
        return await res.status(HTTP_STATUS_CODES.SUCCESS).json({ task });
    }
    catch (err) {
        return res.status(HTTP_STATUS_CODES.ERROR).send(err);
    }
}

const updateTask = async (req, res) => {
    try {
        const task = await taskApi.updateTask(req?.params?.id, req?.body);
        return await res.status(HTTP_STATUS_CODES.SUCCESS).json({ task });
    }
    catch (err) {
        return res.status(HTTP_STATUS_CODES.ERROR).send(err);
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await taskApi.deleteTask(req?.params?.id);
        return await res.status(HTTP_STATUS_CODES.SUCCESS).json({ task });
    }
    catch (err) {
        return res.status(HTTP_STATUS_CODES.ERROR).send(err);
    }
}
module.exports = { createTask, fetchAllTasks, fetchOneTask, updateTask, deleteTask };