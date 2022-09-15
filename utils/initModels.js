const { Actors } = require("../models/actor.model");
const { ActorImg } = require("../models/actorImg.model");
const { Genres } = require("../models/genres.model");
const { GenresImg } = require("../models/genresImg.models");
const { Production } = require("../models/production.model");
const { ProductionImg } = require("../models/productionImg.model");

const actorsReations = () => {
  // M User <---> Production M
  Actors.belongsToMany(Production, {
    through: "actorProductions",
  });

  // 1 Actor <----> ActorImg 1
  Actors.hasOne(ActorImg);
  ActorImg.belongsTo(Actors);
};

const genresRelations = () => {
  // M Genres <----> Production M
  Genres.belongsToMany(Production, {
    through: "genresProductions",
  });

  // 1 Genres <----> GenresImg 1
  Genres.hasOne(GenresImg);
  GenresImg.belongsTo(Genres);
};

const productionsRelations = () => {
  // 1 Production <----> ProductionImg 1
  Production.hasOne(ProductionImg);
  ProductionImg.belongsTo(Production);
};

const initModels = () => {
  actorsReations();
  genresRelations();
  productionsRelations();
};

module.exports = { initModels };
