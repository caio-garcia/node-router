const router = require("express").Router();

const AddressModel = require("../models/Address.model");
const UserModel = require("../models/User.model");

//POST

router.post("/new/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const newAddress = await AddressModel.create({ ...req.body, user: userId });
    const editedUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $push: { addresses: newAddress._id } },
      { new: true }
    );
    return res.status(201).json({ newAddress, editedUser });
  } catch (error) {
    return res.status(500).json(error);
  }
});

//GET
router.get("/read", (req, res) => {});

//read-details
router.get("/read/:id", (req, res) => {});

//PUT
router.put("/update/:addressId", async (req, res) => {
  const { addressId } = req.params;
  try {
    const editedAddress = await AddressModel.findOneAndUpdate(
      { _id: addressId },
      { ...req.body },
      { new: true }
    );
    return res.status(200).json(editedAddress);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//PATCH

//DELETE

router.delete("/delete/:addressId", async (req, res) => {
  const { addressId } = req.params;
  try {
    const deletedAddress = await AddressModel.deleteOne({ _id: addressId });
    return res.status(200).json(deletedAddress);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
