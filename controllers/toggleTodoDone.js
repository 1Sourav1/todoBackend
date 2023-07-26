const Todo = require("../models/Todo")

exports.toggleTodoDone = async (req, res) => {
    try {
        const todoRef = await Todo.findById(req.params.id);
        const todo = await Todo.findOneAndUpdate(
            { _id: req.params.id },
            { done: !todoRef.done }
        )
        await todo.save()
        res.status(201).json(
            {
                success: true,
                data: todo,
                message: "Entire todo data is fetched"
            })
    }
    catch (err) {
        console.log(err);
        console.error(err);
        res.status(500).json(
            {
                success: false,
                data: "internal server error",
                message: err.message
            }
        )
    }
}