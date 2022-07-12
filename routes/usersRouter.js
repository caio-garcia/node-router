const router = require("express").Router();

const { v4: uuid } = require("uuid");

const userData = require("../data/usersData");

//POST

router.post("/new", (req, res) => {
  userData.push({ ...req.body, id: uuid() });
  return res
    .status(201)
    .json({ message: "Successfully created", result: userData });
});

//GET
router.get("/read", (req, res) => {
  return res.status(200).json({ message: "Success", result: userData });
});

//read-details
router.get("/read/:id", (req, res) => {
  const { id } = req.params;
  const result = userData.filter((elem) => {
    return elem.id === id;
  });
  return res.status(200).json({ message: "User found!", result: result[0] });
});

//PUT
router.put("/update/:id", (req, res) => {
  const { id } = req.params;

  userData.forEach((currentDocument, i) => {
    if (currentDocument.id === id) {
      userData[i] = { ...req.body, id: currentDocument.id };
    }
  });

  const newDocument = userData.filter(
    (currentDocument) => currentDocument.id === id
  );

  return res.status(200).json(newDocument[0]);
});

//PATCH

//DELETE

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  userData.pop(
    userData.indexOf(
      userData.find((elem) => {
        elem.id === id;
      })
    )
  );
  res.status(200).json({ message: "Record deleted" });
});

module.exports = router;
