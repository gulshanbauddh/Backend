let checkToken = (req, res, next) => {
  if (req.query.token == "" || req.query.token == undefined) {
    return res.send({
      status: 0,
      msg: "Plese fill token !",
    });
  } else if (req.query.token != process.env.MYToken) {
    return res.send({
      status: 0,
      msg: "Please fill correct token !",
    });
  }
  next();
};
module.exports = { checkToken };
