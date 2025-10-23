let express=require("express")
let app=express()

app.get("/",(req, res)=>{
  res.send({status:1, msg:"Home Page API" })
})
app.get("/news",(req, res)=>{
  res.send({status:1, msg:"NEWS Page API" })
})
app.listen("8001")