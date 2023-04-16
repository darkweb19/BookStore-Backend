const Author = require("../models/model.author");

exports.author = async (req, res) => {
	try {
		const authors = await Author.find();
		if (!authors) {
			return res.status(404).json({
				success: false,
				message: "Author not found",
			});
		} else {
			return res.status(200).json({
				success: true,
				message: "Author Lists",
				data: {
					authors,
				},
			});
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			error: "Server Error",
			error: error.message,
		});
	}
};

exports.store = async (req, res) => {
	try {
		const author = new Author(req.body);
		await author.save();
		res.status(200).json({
			success: true,
			message: "Author added to the database",
			data: { author },
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: "Server Error",
			error: error.message,
		});
	}
};

exports.show = async (req, res) => {
	try {
		const author = await Author.findById(req.params.id);
		if (author) {
			res.status(200).json({
				success: true,
				message: "Author found by id",
				ata: {
					author,
				},
			});
		} else {
			res.status(404).json({
				success: true,
				message: "author could not found",
			});
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			error: "Server Error",
			error: error.message,
		});
	}
};

exports.delete = async (req, res) => {
	try {
		const author = await Author.findByIdAndDelete(req.params.id);
		if (author) {
			res.status(200).json({
				success: true,
				message: "Author deleted by id",
			});
		} else {
			res.status(404).json({
				success: false,
				message: "Author could not found",
			});
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			error: "Server Error",
			error: error.message,
		});
	}
};
