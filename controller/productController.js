//const auth = require("../middleware/auth");
const Item = require("../models/item");


exports.addItem = [async (req, res, next) => {
    try {
        const { title, description, quantity, category, price, barcode } = req.body;
        const item = await Item.findOne({barcode})
        if (item) {
            res.status(400).send('Product Already in Database');
        }
        const newItem = new Item({
            title,
            description,
            category,
            price,
            quantity,
            barcode
        });
        await newItem.save();
        res.status(201).send('Item added to database successfully')
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
}]

exports.getAll = [async (req, res) => {
    try{
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}]