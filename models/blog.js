const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a schema using mongoose
const blogSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		snippet: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

// The model starts with a capital letter and is pluralized by adding an 's'
// The model first parameter is the single of a collection
// The model is exported which is then used to write to the database or read.
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
