const Todo = require("../models/Todo")

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(204).json(
            {
                success: true,
                message: "Todo Deleted successfully"
            }
        )
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