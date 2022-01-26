const post = require("../models/blogModel");

module.exports.postList = (req, res) => {
	post.all( (rows) => {
		if(rows.length===0){
			res.send({message: 'Aucun article'});
			return
		}

		res.send({articles:rows})
		
	})
}

module.exports.postDetail = (req, res) => {
	const slug = req.params.slug;
	post.findOne(slug, (row) => {
		if(row.length===0){
			res.send({message: 'Aucun article'});
			return
		}

		res.send({articles:row})
		
	})
}

module.exports.postUpdate = (req, res)=>{
	const slug = req.params.slug
	post.findOne(slug, (row) => {
		post.findOne(slug, (row) => {
		if(row.length===0){
			res.send({message: 'Aucun article'});
			return
		}

		post.update(slug, req.body, (row) => {
		res.send({message:"Modification en cours.."})
		})
		
	})
	})
}


