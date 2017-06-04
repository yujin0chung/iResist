module.exports.getUserId = (req, res) => {
  res.send(200, {
    userId: req.user
  });
};
