const { getAllPlanets } = require('../../models/planets.model');

const HttpGetAllPlanets = async (req, res) => {
  return res.status(200).json(await getAllPlanets());
};

module.exports = {
  HttpGetAllPlanets,
};
