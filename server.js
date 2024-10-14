const express = require ("express");
const app = express();

app.use(express.static("public/html"));
app.use("/static", express.static("public/img"));

app.listen(3000, ()=>{
  console.log("Server is running in port 3000");
})