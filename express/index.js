let express = require("express");
let app = express();
app.use(express.json());

// get Methed used for display data
app.get("/", (req, res) => {
  res.send({ status: 1, msg: "Home Page API" });
});
app.get("/news", (req, res) => {
  res.send({ status: 1, msg: "NEWS Page API" });
});
app.get("/about", (req, res) => {
  res.send({ status: 1, msg: "About Page API" });
});

// Post method is used for securly. It could not display.
app.post("/login", (req, res) => {
  console.log(req.body);
  res.send({
    status: 1,
    msg: "Login API",
    dataData: req.body,
    queryData:req.query
  });
});

app.listen("8000");
