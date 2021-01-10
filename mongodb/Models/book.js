const mongoose = require("mongoose");
const schema = mongoose.Schema;

const BookSchema = new schema({
    title: String,
    category: String,
    published: Boolean,
    num: Number
});

module.exports = mongoose.model('book', BookSchema);