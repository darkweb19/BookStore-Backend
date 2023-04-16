const Category = require("../models/model.category");

exports.category = async (req, res) => {
	try {
		const categories = await Category.find();
		res.status(200).json({
			success: true,
			message: "Category Lists",
			data: {
				categories,
			},
		});
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
		const category = new Category(req.body);
		await category.save();
		res.status(200).json({
			success: true,
			message: "Category added in database ",
			data: {
				category,
			},
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
		const category = await Category.findById(req.params.id);
		if (!category) {
			return res.status(404).json({
				success: false,
				message: "Category not found",
			});
		} else {
			return res.status(200).json({
				success: true,
				message: "Category by id",
				data: {
					category,
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

exports.delete = async (req, res) => {
	try {
		const category = await Category.findByIdAndDelete(req.params.id);
		if (category) {
			return res.status(200).json({
				success: true,
				message: "Category deleted by id",
			});
		} else {
			return res.status(404).json({
				success: false,
				message: "Category not found",
			});
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			error: "Server Error",
			message: err.message,
		});
	}
};
