exports.getAll = (req, res) => {
  res.send([])
};

exports.create = (req, res) => {
  res.send({id: 1234})
};

exports.update = (req, res) => {
  res.send(req.query)
};

exports.delete = (req, res) => {
  res.send(req.query)
};
