const db = require("../configs/database");

const post = {
	all: async (cb) => {
		const [rows] = await db.query("SELECT * FROM article");

		cb(rows);
	},

	findOne: async (slug, cb) => {
		const [row] = await db.query(
			"SELECT * FROM articles WHERE slug=?",
			slug
		);

		cb(row);
	},

	create: async (data, cb) => {
		const [row] = await db.query("INSERT INTO articles SET ?", [data]);
		cb(row);
	},

	update: async (slug, data, cb) => {
		const [row] = await db.query(
			"UPDATE  articles SET ? WHERE articles.slug=?",
			[data, slug]
		);
		cb(row);
	},

	delete: async (slug, cb) => {
		const [row] = await db.query("DELETE FROM articles WHERE slug=?", [
			slug,
		]);
		cb(row);
	},
};
