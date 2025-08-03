import mongoose from 'mongoose'; 

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String },

  accounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;