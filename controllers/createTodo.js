const Todo = require("../models/Todo")

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body.data;
        const response = await Todo.create({ title, description });

        await response.save();
        res.status(201).json(
            {
                success: true,
                data: response,
                message: "Entry created successfully"
            })
    }
    catch (err) {
        console.log(err);
        console.error(err);
        res.status(500).json(
            {
                success: false,
                data: "Missing details",
                message: err.message
            }
        )
    }
}