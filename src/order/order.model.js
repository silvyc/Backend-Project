import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    orderStatus: { type: String, required: true },
    products: {},
    active: { type: Boolean },
  },
  { timestamps: true }
);
const orderModel = model('order', orderSchema);

export default orderModel;
