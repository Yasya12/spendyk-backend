import mongoose from "mongoose";

const bankAccountSchema = new mongoose.Schema({
  bankName: { type: String, required: true },
  accountNumber: { type: String, required: true },

  account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
}, { timestamps: true });


const BankAccount = mongoose.model("BankAccount", bankAccountSchema);

export default BankAccount;

