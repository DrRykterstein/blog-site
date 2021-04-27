import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // Initialize prisma client

// Initialize all reusable database queries within a constructor
function QueryDatabase() {
	// Get all rows and columns
	this.getAll = async () => {
		return await prisma.$queryRaw("SELECT * FROM post");
	};

	// Get a single row with the corresponding id
	this.getOne = async (id: string) => {
		return await prisma.$queryRaw("SELECT * FROM post WHERE id = ?", id);
	};

	// Get all rows without the corresponding id
	this.getAllExcluding = async (id: string) => {
		return await prisma.$queryRaw("SELECT * FROM post WHERE id != ?", id);
	};
}

// Export our new database object
export const db = new QueryDatabase();

// function QueryDatabase() {
//   // Open the database for querying
//   this.openDb = async () => {
//     return open({
//       filename: "./lib/db.sqlite",
//       driver: sqlite3.Database
//     });
//   }

//   // Get all rows and columns
//   this.getAll = async () => {
//     const db = await this.openDb();
//     return db.all("SELECT * FROM posts");
//   }

//   // Get a single row with the corresponding id
//   this.getOne = async (id: string) => {
//     const db = await this.openDb();
//     return db.get("SELECT * FROM posts WHERE id = ?", id);
//   }

//   // Get all rows without the corresponding id
//   this.getAllExcluding = async (id: string) => {
//     const db = await this.openDb();
//     return db.all("SELECT * FROM posts WHERE id != ?", id);
//   }
// }
