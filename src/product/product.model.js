import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    //restaurant_id will help us as a secondary key to connect products with restaurant
    restaurant_id: { type: Schema.Types.ObjectId, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);
const productModel = model('product', productSchema);

export default productModel;
