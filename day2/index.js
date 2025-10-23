// //  Bigineer:
// let http= require("http")
// let server=http.createServer((req, res)=>{
//   res.end("Welcome to GB world.")
// })

// server.listen("8000")

// Advance:
let http = require("http");
let server = http.createServer((req, res) => {
  if (req.url == "/news") {
    let obj = {
      status: 1,
      data: [
        {
          newsTitle: "Gulshan",
          newsDes: "Gulshan is Full stack Web Developer",
        },
        {
          newsTitle: "IIP",
          newsDes: "IIP Hello",
        },
      ],
    };
    res.end(JSON.stringify(obj));
  }
  if (req.url == "/about") {
  }
  if (req.url == "/course") {
  }
  if (req.url == "/") {
    res.end("Welcome to gb World! \nI am Home");
  }
});

server.listen("8000");
