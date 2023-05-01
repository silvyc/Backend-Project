import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    orderStatus: {
      type: String,
      required: true,
      enum: [
        'Creado',
        'Enviado',
        'Aceptado',
        'Recibido',
        'En direccion',
        'Realizado',
      ],
    },
    //restaurant_id will help us as a secondary key to connect orders with restaurant
    restaurant_id: { type: Schema.Types.ObjectId, required: true },
    user_id: { type: Schema.Types.ObjectId, required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);
const orderModel = model('order', orderSchema);

export default orderModel;
