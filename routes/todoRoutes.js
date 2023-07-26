const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { getTodo } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");
const {toggleTodoDone} = require('../controllers/toggleTodoDone')

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", toggleTodoDone)
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;