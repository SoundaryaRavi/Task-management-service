const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      default: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

taskSchema.index(
  {
    title: 1,
    createdBy: 1,
  },
  {
    unique: true,
  }
);

const taskModel = mongoose.model("task", taskSchema);

module.exports = taskModel;