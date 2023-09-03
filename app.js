const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json({
    mesg: "Hello from backend!",
  });
});
app.listen(5000);
console.log("Server is listening");
