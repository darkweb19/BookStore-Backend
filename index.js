const express = require("express");
const app = express();
app.use(express.json());
//database connnection
require("./app/configs/config.db");

//routes
app.use(require("./app/routes/route.auth"));
app.use(require("./app/middlewares/middleware.jwt"));
app.use(require("./app/routes/route.book"));
app.use(require("./app/routes/route.author"));
app.use(require("./app/routes/route.category"));
app.use(require("./app/routes/route.user"));

app.listen(3000, () => {
	console.log("Server Started at port ");
});
