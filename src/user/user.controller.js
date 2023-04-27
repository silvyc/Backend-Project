import userModel from './user.model';

export async function createUser(req, res) {
  try {
    const user = req.body;
    req.body.active = true;
    const result = await userModel.create(user);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
}

export async function readUserById(req, res) {
  try {
    const id = req.params.id;
    const result = await userModel.findById(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
}

export async function readUserByMP(req, res) {
  try {
    const { email, password } = req.params;
    const result = await userModel.findOne({ email, password });
    result ? res.status(200).json(result) : res.sendStatus(404);
  } catch (err) {
    res.status(400).json(err.message);
  }
}

export async function updateUser(req, res) {
  try {
    const id = req.params.id;
    const result = await userModel.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
}

export async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const result = await userModel.findByIdAndUpdate(id, { active: false });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
}
