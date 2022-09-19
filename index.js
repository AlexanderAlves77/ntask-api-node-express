const express = require("express")
const app = express()
const consign = require("consign")
const PORT = 3000

app.set("json spaces", 4)

consign()
  .include("routes")
  .into(app)



app.listen(PORT, () => console.log(`NTask API - porta ${PORT}`))