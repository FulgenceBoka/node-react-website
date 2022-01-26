const db = require("../configs/database");

const post = {
	/**
	 *
	 * @param  {Function} cb [description]
	 * @return {[object]}      [Liste tous les articles]
	 */
	all: async (cb) => {
		const [rows] = await db.query("SELECT * FROM articles");

		cb(rows);
	},

	/**
	 *
	 * @param  {[string]}   slug [le slug de l'article a trouver]
	 * @param  {Function} cb   [description]
	 * @return {[object]}        [description]
	 */
	findOne: async (slug, cb) => {
		const [row] = await db.query(
			"SELECT * FROM articles WHERE slug=?",
			slug
		);

		cb(row);
	},

	/**
	 * [Creation de nouvel article]
	 * @param  {[object : {}]}   data [description]
	 * @param  {Function} cb   [description]
	 * @return {[type]}        [description]
	 */
	create: async (data, cb) => {
		const [row] = await db.query("INSERT INTO articles SET ?", [data]);
		cb(row);
	},

	/**
	 *
	 * @param  {[type]}   slug [description]
	 * @param  {[type]}   data [description]
	 * @param  {Function} cb   [description]
	 * @return {[type]}        [description]
	 */
	update: async (slug, data, cb) => {
		const [row] = await db.query(
			"UPDATE  articles SET ? WHERE articles.slug=?",
			[data, slug]
		);
		cb(row);
	},

	/**
	 * [description]
	 * @param  {[type]}   slug [description]
	 * @param  {Function} cb   [description]
	 * @return {[type]}        [description]
	 */
	delete: async (slug, cb) => {
		const [row] = await db.query("DELETE FROM articles WHERE slug=?", [
			slug,
		]);
		cb(row);
	},
};

module.exports = post;
