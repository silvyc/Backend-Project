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
export async function readRestaurant(req, res) {}
export async function updateRestaurant(req, res) {}
export async function deleteRestaurant(req, res) {}
