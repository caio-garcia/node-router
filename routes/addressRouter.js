const router = require("express").Router();

const { v4: uuid } = require("uuid");

const addressData = require("../data/addressData");

//POST

router.post("/new", (req, res) => {
  addressData.push({ ...req.body, id: uuid() });
  return res
    .status(201)
    .json({ message: "Successfully created", result: addressData });
});

//GET
router.get("/read", (req, res) => {
  return res.status(200).json({ message: "Success", result: addressData });
});

//read-details
router.get("/read/:id", (req, res) => {
  const { id } = req.params;
  const result = addressData.filter((elem) => {
    return elem.id === id;
  });
  return res.status(200).json({ message: "Address found!", result: result[0] });
});

//PUT
router.put("/update/:id", (req, res) => {
  const { id } = req.params;

  addressData.forEach((currentDocument, i) => {
    if (currentDocument.id === id) {
      addressData[i] = { ...req.body, id: currentDocument.id };
    }
  });

  const newDocument = addressData.filter(
    (currentDocument) => currentDocument.id === id
  );

  return res.status(200).json(newDocument[0]);
});

//PATCH

//DELETE

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  addressData.pop(
    addressData.indexOf(
      addressData.find((elem) => {
        elem.id === id;
      })
    )
  );
  res.status(200).json({ message: "Record deleted" });
});

module.exports = router;
