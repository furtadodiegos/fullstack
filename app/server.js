const express = require("express");
const path = require("path");
const cors = require("cors");
const http = require("http");

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, "build")));
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const server = http.createServer(app);

server.listen(port, function() {
  console.log(`Frontend start on http://localhost:${port}`);
});
