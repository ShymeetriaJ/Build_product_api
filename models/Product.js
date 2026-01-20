const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
    },

    description: {
        type: String,
        required: [true, "Description is required."],
    },

    price: {
        type: Number,
        required: [true, "Price is required."],
        min: [0.01, "Price must be greater than 0"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
    },
    inStock: {
        type: Boolean,
        default: true,
    },
    tags: {
        type: [String],
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    }

});

const Product = mongoose.model('Product', productSchema)

module.exports = Product