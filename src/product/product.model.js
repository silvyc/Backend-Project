import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    restaurant: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    active: { type: Boolean },
  },
  { timestamps: true }
);
const productModel = model('product', productSchema);

export default productModel;
