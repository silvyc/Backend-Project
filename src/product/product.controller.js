import productModel from './product.model';

export async function createProduct(req, res) {
  try {
    const product = req.body;
    req.body.active = true;
    const result = await productModel.create(product);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
}
export async function readProductByRC(req, res) {
  try {
    const category = req.query.category;
    const restaurant = req.query.restaurant;
    const query = {};

    if (category) {
      query.category = category;
    }
    if (restaurant) {
      query.restaurant = restaurant;
    }
    const result = await productModel.find(query);
    result ? res.status(200).json(result) : res.sendStatus(404);
  } catch (err) {
    res.status(400).json(err.message);
  }
}

export async function readProductById(req, res) {
  try {
    const id = req.params.id;
    const result = await productModel.findById(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
}

export async function updateProduct(req, res) {
  try {
    const id = req.params.id;
    const result = await productModel.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
}
export async function deleteProduct(req, res) {
  try {
    const id = req.params.id;
    const result = await productModel.findByIdAndUpdate(id, {
      active: false,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
}
