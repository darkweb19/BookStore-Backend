const Book = require("../models/model.book");

exports.book = async (req, res) => {
	try {
		const books = await Book.find();
		if (!books) {
			return res.status(404).json({
				success: false,
				message: "Book not found",
			});
		} else {
			return res.status(200).json({
				success: true,
				message: "Book lists",
				data: {
					books,
				},
			});
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			error: "Server Error",
			message: error.message,
		});
	}
};

exports.store = async (req, res) => {
	try {
		const book = new Book(req.body);
		await book.save();
		res.status(200).json({
			success: true,
			message: "Book added successfully",
			data: {
				book,
			},
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error: "Server error",
			message: error.message,
		});
	}
};

exports.show = async (req, res) => {
	try {
		const book = await Book.findById(req.params.id);
		if (book) {
			res.status(200).json({
				success: true,
				message: "Book by Id",
				data: {
					book,
				},
			});
		} else {
			res.status(404).json({
				success: false,
				message: "Book not found",
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
		const book = await Book.findByIdAndDelete(req.params.id);
		if (book) {
			res.status(200).json({
				success: true,
				message: "Deleted Successfully",
			});
		} else {
			res.status(404).json({
				success: false,
				message: "Book not found",
			});
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			error: "cannot delete",
			message: error.message,
		});
	}
};
