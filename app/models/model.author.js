const mongoose = require("mongoose");

module.exports = mongoose.model("Author", {
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	country: { type: String, required: true },
});
