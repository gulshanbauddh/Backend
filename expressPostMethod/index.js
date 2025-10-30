let express = require("express");
let app = express();
app.use(express.json())

// Midleware
let checkToken=(req,res,next)=>{
  console.log("Welcome")
}

app.use(checkToken)     // Midleware





app.get("/", (req, res) => {
  res.send({
    status: 1,
    msg: "I am Get Resposce.",
  });
});

app.get("/news", (req, res) => {
  res.send({
    status: 1,
    msg: "News",
  });
});

app.get("/news/:id4547", (req, res) => {
  let currentId=req.params.id4547;
  res.send({
    status: 1,
    msg: "News Details API "+currentId,
  });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: 1,
    msg: "Login API Post Method",
    dataBody:req.body,
    dataQuery:req.query
  }
  )
  // res.send({
  //   status: 1,
  //   msg: "Login API Post Method",
  //   dataBody:req.body,
  //   dataQuery:req.query
  // });
});

app.listen("8000");
