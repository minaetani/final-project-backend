import express from 'express';

const app = express();
const port = 8000;

app.get("/hello",(request, response) => {
  response.header({"Access-Control-Allow-Origin": "*"});
  response.json({ data: "Hello World!"})
  })
})