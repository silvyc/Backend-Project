import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    orderStatus: { type: String, required: true },
    restaurant: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);
const orderModel = model('order', orderSchema);

export default orderModel;
