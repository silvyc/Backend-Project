import { Schema, model } from 'mongoose';

const restaurantSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    active: { type: Boolean },
    role: {
      type: String,
      required: true,
      enum: ['client', 'deliveryman', 'restaurant administrator'],
    },
  },
  { timestamps: true }
);
const restaurantModel = model('restaurant', restaurantSchema);

export default restaurantModel;
