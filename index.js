const express = require("express");
let url = require("url");
const app = express();

const pagesFolder = "./pages/";
const fs = require("fs");

const iteratePages = (cb) => fs.readdir(pagesFolder, cb);

iteratePages((err, files) => {
	files.forEach((file) => {
		console.log(file);
	});
});

app.listen(3000, () => {
	console.log("Application started and Listening on port 3000");
});

// serve your css as static
app.use(express.static(__dirname + "/styles/"));

app.get("/:page?", (req, res) => {
	console.log(req.params.page);
	res.sendFile(
		!req.params.page
			? __dirname + "/pages/index.html"
			: fs.existsSync(__dirname + "/pages/" + req.params.page + ".html")
			? __dirname + "/pages/" + req.params.page + ".html"
			: __dirname + "/pages/404.html"
	);
});
