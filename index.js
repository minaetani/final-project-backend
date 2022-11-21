import express from 'express';

const app = express();
const port = 8000;

app.get("/hello", async (request, response) => {
  response.header({"Access-Control-Allow-Origin": "*"});
  //const reult = await sql `SELECT * FROM playing_with_neon`,
  //response.json({data:result});
  response.json({data:[
    {name:"Alice", id:2},
  ]})
    //"Hello World!"
  });
app.listen(port,() => {
  console.log(`Now listening on port ${port}...`)
});