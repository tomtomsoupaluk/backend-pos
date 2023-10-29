import mongoose, { Schema, Document } from "mongoose";

export interface ISaleItem extends Document {
  saleId: string;
  productId: string;
  quantity: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

const saleItemSchema: Schema = new Schema({
  saleId: { type: String, required: true },
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

export default mongoose.model<ISaleItem>("SaleItem", saleItemSchema);
