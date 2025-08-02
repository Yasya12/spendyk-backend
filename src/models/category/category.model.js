import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  isGlobal: { type: Boolean, default: false },

  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // null if global
}, { timestamps: true });

const Category = mongoose.model("Category", categorySchema);

export default Category;
