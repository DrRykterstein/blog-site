const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

async function setup() {
  const db = await sqlite.open({
    filename: "./lib/db.sqlite",
    driver: sqlite3.Database
  });

  await db.migrate({ 
    migrationsPath: "./migrations",
    force: "last" 
  });

  // Get information from database
  // const posts = await db.all("SELECT * FROM posts");
  // console.log(`Posts: ${JSON.stringify(posts, null, 2)}`);
}

setup();
