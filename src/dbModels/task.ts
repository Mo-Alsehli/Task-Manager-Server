import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "There Must Be A Name"],
    maxLength: [50, "Name Can't Be More Than 50 Letters"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const TaskModel = mongoose.model("Task", TaskSchema);

export default TaskModel;
