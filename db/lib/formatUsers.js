module.exports = (users) => {
  let output = {};
  users.forEach(user => {
    output[user.id] = user;
  });
  return output;
};
