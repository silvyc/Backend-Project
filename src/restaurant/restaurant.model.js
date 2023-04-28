import { Schema, model } from 'mongoose';

const restaurantSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    category: { type: String, required: true },
    active: { type: Boolean },
    inventory: {},
  },
  { timestamps: true }
);
const restaurantModel = model('restaurant', restaurantSchema);

export default restaurantModel;
