const Todo = require("../models/Todo")

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body.data;

        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description }
        )
        await todo.save();
        res.status(201).json(
            {
                success: true,
                data: todo,
                message: "Updated Successfully"
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