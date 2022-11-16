import express from 'express';

const app = express();
const port = 8000;

app.get("/hello",(request, response) => {
  response.header({"Access-Control-Allow-Origin": "*"});
  response.json({ data: "Hello World!"})
  })

//copied from backend test 
  const postgres = require('postgres');
require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PROJECT_NAME } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${PROJECT_NAME}`;

const sql = postgres(URL, { ssl: 'require' });

async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}
getPgVersion();

async function getData(){
const result = await sql `SELECT *From playing_with_neon
  console.log(result);
 }
getData();
async function updateColumnDAta(){

}
