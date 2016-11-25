exports.getAll = (req, res) => {
  res.send({data: []})
};

exports.create = (req, res) => {
  console.log(req.body)
  res.send({id: 1234})
};

exports.update = (req, res) => {
  res.send(req.query)
};

exports.delete = (req, res) => {
  res.send(req.query)
};
