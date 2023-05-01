import mongoose, { Schema, model } from 'mongoose';

const restaurantSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    categories: {
      type: [String],
      validate: {
        validator: function (v) {
          return v && v.length > 0;
        },
        message: 'Minimum number of categories is 1, Add a category.',
      },
    },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);
const restaurantModel = model('restaurant', restaurantSchema);

export default restaurantModel;
