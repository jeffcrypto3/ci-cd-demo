const express = require("express");
const cors = require("cors");
const PORT = 5001;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, welcome to your application");
});

app.get("/name", (req, res) =>{
    res.send("My name is John Doe");
})


module.exports = app;


// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });