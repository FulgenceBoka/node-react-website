const db = require("../configs/database")


const users = {
	signup: async (data, callback) => {

		

		try{
			const [user] = await db.query("INSERT INTO users SET ?", [data])

		callback(user)
		}

		catch(err){
			callback({errors:err.message});
			throw err;
		}
	},


	signin: async (data, callback) => {

		const [user] = await db.query("SELECT * FROM users WHERE email=?", [data])

		callback(user[0])
	}
}

module.exports = users;