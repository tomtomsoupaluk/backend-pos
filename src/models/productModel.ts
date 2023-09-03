import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  barcode: string;
  name: string;
  price: number;
  qty: number;
}

const productSchema: Schema = new Schema({
  barcode: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
});

export default mongoose.model<IProduct>("Product", productSchema);
