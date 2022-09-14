displayJoke = (req, res) => {
  const data = "What do you call a bear with no teeth? A gummy bear!";
  res.status(200).send(data);
};

module.exports = {
  displayJoke,
};
