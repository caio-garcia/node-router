const router = require("express").Router();

const UserModel = require("../models/User.model");

const userData = require("../data/usersData");

//POST

router.post("/new", async (req, res) => {
  const newUser = await UserModel.create(req.body);
  return res
    .status(201)
    .json({ message: "Successfully created", result: newUser });
});

//GET
router.get("/read", async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    return res.status(200).json({ message: "Success", result: allUsers });
  } catch (error) {
    res.status(500).json(err);
  }
});

//read-details
router.get("/read/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findOne({ _id: id }).populate("addresses");
    return res.status(200).json({ message: "User found!", result: user });
  } catch (error) {
    res.status(500).json(err);
  }
});

//PUT
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    return res.status(200).json({ message: "User updated!", result: user });
  } catch (error) {
    res.status(500).json(err);
  }
});

//PATCH

//DELETE

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User deleted!", result: user });
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
