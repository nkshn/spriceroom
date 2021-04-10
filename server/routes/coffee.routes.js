const e = require("express");
const { Router } = require("express");
const router = Router();

// require models
const Coffee = require("../models/coffee");

// get All coffeis
router.get("/coffee", async (request, response) => {
  try {
    const data = await Coffee.find({}, "-__v");
    response.status(200).json(data);
  } catch (err) {
    console.log(`server error on getting all coffeis from db: ${err}`);
    response.sendStatus(500).json({ msg: "server responded error", err: err });
  }
});

// get only specific coffee
router.get("/coffee/:id", async (request, response) => {
  const { id } = request.params;
  
  try {
    const coffeeObj = await Coffee
      .find({ _id: id }, ("-__v"))
      .then(item => {
        if(item.length === 0) { // if no such coffee
          return null;
        } else {
          return item[0];
        }
      });
      
      if(coffeeObj === null) {
        response.status(404).json({ msg: "no such coffee, try other" });
      } else {
        response.status(200).json(coffeeObj);
      }
  } catch (err) {
    console.log(`server error on deleting coffee from db: ${err}`);
    response.sendStatus(500).json({ msg: "server responded error", err: err });
  }
});

// add new one coffee
router.post("/coffee", async (request, response) => {
  const gettedCoffee = request.body;

  try {
    const existingName = await Coffee.findOne({ name: gettedCoffee.name });

    if (existingName) {
      return response.status(400).json({ msg: "coffee already exists" });
    }
    
    const newCoffee = new Coffee(gettedCoffee);
    await newCoffee.save();
    response.status(200).json({ message: "coffee was added" });

  } catch (err) {
    console.log(`server error on saving coffee to db: ${err}`);
    response.sendStatus(500).json({ msg: "server responded error", err: err });
  }

});

// delete one coffee
router.delete("/coffee/:id",  async (request, response) => {
  const { id } = request.params;

  try {
    const existingCoffee = await Coffee.findOne({ _id: id });

    if (existingCoffee) {
      await Coffee.deleteOne({ _id: id });
      response.status(200).json({ msg: "coffee was deleted" });
    }

    return response.status(400).json({ msg: "coffee already deleted" });

  } catch (err) {
    console.log(`server error on deleting coffee from db: ${err}`);
    response.sendStatus(500).json({ msg: "server responded error", err: err });
  }
});

module.exports = router;