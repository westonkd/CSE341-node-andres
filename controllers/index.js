displayName = (req, res) => {
  const data = "Hello, Andres!";
  res.status(200).send(data);
};

module.exports = {
  displayName,
};
