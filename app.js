const express = require("express");
const app = express();
const morgan = require("morgan");

const { getPosts } = require("./routes/post");

app.get("/", getPosts);

const port = 8095;

app.listen(port, () => {
    console.log("node api is listening on port " + port);
});