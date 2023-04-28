import orderModel from './order.model';

export async function createOrder(req, res) {
  try {
    const order = req.body;
    req.body.active = true;
    const result = await orderModel.create(order);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
}
export async function readOrderId(req, res) {
  try {
    const id = req.params.id;
    const result = await orderModel.findById(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
}
export async function updateOrder(req, res) {
  try {
    const id = req.params.id;
    const result = await orderModel.findById(id);
    if (result.orderStatus != 'Delivered') {
      result = await orderModel.findByIdAndUpdate(id, req.body, {
        runValidators: true,
      });
    } else {
      res.status(400).json('Order was already Delivered');
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
}

export async function deleteOrder(req, res) {
  try {
    const id = req.params.id;
    const result = await orderModel.findByIdAndUpdate(id, {
      active: false,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
}
