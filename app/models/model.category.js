const mongoose = require("mongoose");

module.exports = mongoose.model("Category", {
	name: { type: String, required: true },
	status: { type: String },
});
