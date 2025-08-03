import mongoose from "moongose";

const TransactionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["income", "expense", "transfer"],
      required: true,
    },
    amount: { type: Number, required: true },
    description: { type: String },
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    
    bankAccount: { type: mongoose.Schema.Types.ObjectId, ref: "BankAccount" }, // optional
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;
