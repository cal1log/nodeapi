exports.getPosts = (req, res) => {
    res.json({
        posts: [{title: "First"}, {title: "Second"}]
    });
};