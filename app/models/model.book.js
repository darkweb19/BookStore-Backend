const mongoose = require("mongoose");

module.exports = mongoose.model("Book", {
	name: { type: String, required: true },
	isbn: { type: String, required: true },
	category: { type: Object, required: true },
	author: { type: String, required: true },
	price: { type: Number, required: true },
});
