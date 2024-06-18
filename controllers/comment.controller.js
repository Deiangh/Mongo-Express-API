const Comment = require('../models/comment.model');

exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find().populate('post author');
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createComment = async (req, res) => {
    const comment = new Comment(req.body);
    try {
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
