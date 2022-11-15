// app.js
const postgres = require('postgres');
require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PROJECT_NAME } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${PROJECT_NAME}`;

const sql = postgres(URL, { ssl: 'require' });

async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}

// getPgVersion();

//Access to the data
async function getData() {
  const result = await sql `SELECT * FROM playing_with_neon`;
  console.log(result);
  await sql.end();
}

getData();