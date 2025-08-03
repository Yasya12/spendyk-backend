import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isShared: { type: Boolean, default: true },
  
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Transaction" }],
  bankAccounts: [{ type: mongoose.Schema.Types.ObjectId, ref: "BankAccount" }],
}, { timestamps: true });

const Account = mongoose.model("Account", accountSchema);

export default Account;
