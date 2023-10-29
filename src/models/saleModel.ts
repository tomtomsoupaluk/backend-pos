import mongoose, { Schema, Document } from "mongoose";

export interface ISale extends Document {
  billcode: number;
  payMethod: string;
  total: number;
  sellerId: string;
  createdAt: Date;
  updatedAt: Date;
}

const saleSchema: Schema = new Schema({
  billcode: { type: Number, required: true, unique: true },
  payMethod: { type: String, required: true },
  total: { type: Number, required: true },
  sellerId: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

export default mongoose.model<ISale>("Sale", saleSchema);
