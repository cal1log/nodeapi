const express = require("express");
const app = express();
const morgan = require("morgan");

const postRoutes = require("./routes/post");

app.use(morgan("dev"));

app.use("/", postRoutes);

const port = 8095;

app.listen(port, () => {
    console.log("node api is listening on port " + port);
});