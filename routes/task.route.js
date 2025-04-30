const express = require("express");

let router = express.Router();
const {
  fetchAllTasks,
  fetchOneTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");
const { checkToken } = require('../middlewares/token');

router.get("/", checkToken, fetchAllTasks);
router.get("/:id",  checkToken, fetchOneTask);
router.post("/",  checkToken, createTask);
router.put("/:id",  checkToken, updateTask);
router.delete("/:id",  checkToken, deleteTask);

module.exports = router;
