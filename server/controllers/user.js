module.exports.getUserId = (req, res) => {
  res.send(200, {
    user: req.user
  });
};
