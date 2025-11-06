let myToken = "12345";
let checkToken = (req, res, next) => {
  console.log("Welcome");
  if (req.query.token == "" || req.query.token == undefined) {
    return res.send({
      status: 0,
      msg: "Plese fill token !",
    });
  } else if (req.query.token != myToken) {
    return res.send({
      status: 0,
      msg: "Please fill correct token !",
    });
  }
  next();
};

module.exports = { checkToken };
