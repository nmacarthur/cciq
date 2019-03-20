const express = require("express");
const path = require("path");

const app = express();

const email = require("./server/mail");

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.post("/mail", (req, res) => {
  email.newEmailFromData(req.query);
  res.sendStatus(200);
});

app.post("/supporter", (req, res) => {
  email.newSupporterPack(req.query);
  res.sendStatus(200);
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
