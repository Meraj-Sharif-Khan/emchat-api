import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const logedInUserId = req.user._id;

    const filteredusers = await User.find({
      _id: { $ne: logedInUserId },
    }).select("-password");

    res.status(200).json(filteredusers);
  } catch (error) {
    console.log("error in user.controller.js", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
