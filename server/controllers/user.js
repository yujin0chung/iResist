module.exports.getUserId = (req, res) => {
  req.send(200, {
    userId: req.user
  });
};
