const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

async function openDb() {
  return sqlite.open({ filename: "./lib/db.sqlite", driver: sqlite3.Database });
}

// Open SQLite database
async function setup() {
  const db = await openDb();
  await db.migrate({ migrationsPath: "./migrations", force: "last" });

  // Get information from database
  const posts = await db.all("SELECT * FROM Posts");
  console.log(`Posts: ${JSON.stringify(posts, null, 2)}`);
}

setup();