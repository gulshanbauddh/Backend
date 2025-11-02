let express = require("express");
const { checkToken } = require("./checkTokenMiddleware");
require("dotenv").config();
let app = express();
app.use(express.json());

// Midleware
// let myToken = "12345";
let myPass = "12345g";
// let checkToken = (req, res, next) => {
//   console.log("Welcome");
//   if (req.query.token == "" || req.query.token == undefined) {
//     return res.send({
//       status: 0,
//       msg: "Plese fill token !",
//     });
//   } else if (req.query.token != myToken) {
//     return res.send({
//       status: 0,
//       msg: "Please fill correct token !",
//     });
//   }
//   next();
// };

app.use(checkToken); // Midleware

app.use((req, res, next11) => {
  if (req.query.pass == "" || req.query.pass == undefined) {
    return res.send({
      status: 0,
      msg: "Please fill password",
    });
  } else if (req.query.pass != myPass) {
    return res.send({
      status: 0,
      msg: "Please Fill correct password !",
    });
  }
  next11();
});

app.get("/", (req, res) => {
  res.send({
    status: 1,
    msg: "I am Get Resposce.",
  });
});

app.get("/news", checkToken, (req, res) => {
  res.send({
    status: 1,
    msg: "News",
  });
});

app.get("/news/:id4547", (req, res) => {
  let currentId = req.params.id4547;
  res.send({
    status: 1,
    msg: "News Details API " + currentId,
  });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: 1,
    msg: "Login API Post Method",
    dataBody: req.body,
    dataQuery: req.query,
  });
  // res.send({
  //   status: 1,
  //   msg: "Login API Post Method",
  //   dataBody:req.body,
  //   dataQuery:req.query
  // });
});

app.listen("8000");
