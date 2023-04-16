const User = require("../models/model.user");
const bcrypt = require("bcrypt");

exports.user = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json({
			success: true,
			message: "User Listss",
			data: {
				users,
			},
		});
	} catch (error) {
		res.status(404).json({
			success: false,
			message: "Server Error ",
		});
	}
};

exports.store = async (req, res) => {
	try {
		req.body.password = await bcrypt.hash(req.body.password, 10);
		req.body.role = "admin";
		const user = new User(req.body);
		await user.save();
		res.status(200).json({
			success: true,
			message: "User Added to the database",
			data: {
				user,
			},
		});
	} catch (error) {
		res.status(404).json({
			success: false,
			message: "Server Error",
			error: error.message,
		});
	}
};

exports.show = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User  cannot be found",
			});
		} else {
			res.status(200).json({
				success: true,
				message: "User  by Id",
				data: {
					user,
				},
			});
		}
	} catch (error) {
		res.status(404).json({
			success: false,
			message: "Server Error",
			error: error.message,
		});
	}
};

exports.delete = async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User  not found",
			});
		} else {
			res.status(200).json({
				success: true,
				message: "Delete by id",
			});
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Server Error",
		});
	}
};
