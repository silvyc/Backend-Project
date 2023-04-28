import restaurantModel from './restaurant.model';

export async function createRestaurant(req, res) {
  try {
    const restaurant = req.body;
    req.body.active = true;
    const result = await restaurantModel.create(restaurant);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
}

export async function readRestaurantByCN(req, res) {
  try {
    const category = req.query.category;
    const name = req.query.name;
    const query = {};

    if (category) {
      query.category = category;
    }
    if (name) {
      query.name = name;
    }
    const result = await restaurantModel.find(query);
    result ? res.status(200).json(result) : res.sendStatus(404);
  } catch (err) {
    res.status(400).json(err.message);
  }
}

export async function readRestaurantById(req, res) {
  try {
    const id = req.params.id;
    const result = await restaurantModel.findById(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
}

export async function updateRestaurant(req, res) {
  try {
    const id = req.params.id;
    const result = await restaurantModel.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
}
export async function deleteRestaurant(req, res) {
  try {
    const id = req.params.id;
    const result = await restaurantModel.findByIdAndUpdate(id, {
      active: false,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
}
