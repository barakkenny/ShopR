function pingController(req, res) {
  res.status(200).json({ message: 'Pong!' });
}

module.exports = pingController;