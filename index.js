const express = require("express");
let url = require("url");
const app = express();

const pagesFolder = "./pages/";
const fs = require("fs");

app.listen(3000, () => {
	console.log("Application started and Listening on port 3000");
});

// serve your css as static
app.use(express.static(__dirname + "/styles/"));

app.get("/:page", (req, res) => {
	res.sendFile(__dirname + "/pages/index.html");
});
