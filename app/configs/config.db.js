const mongoose = require("mongoose");
require("dotenv").config();

function connectDb() {
	mongoose.connect(process.env.DATABASE_URL);
	console.log("Database connected");
}

connectDb();
