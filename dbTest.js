const sqlite = require('sqlite');

console.log("hello");

async function setup() {
  const db = await sqlite.open('./db.sqlite');
  await db.migrate({ force: 'last' });
}

setup();