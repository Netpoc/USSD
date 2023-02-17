const auth = require("../middleware/auth");
const Item = require("../models/item");

exports.addItem = [auth, async (req, res) => {
    try {
        const newItem = new Item({
            ...req.body,
            owner: req.user._id
        })
        await newItem.save()
        res.status(201).send(newItem)
    } catch (error) {
        res.status(400).send({message: "error"})
    }
}]