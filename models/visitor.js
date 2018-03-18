'use strict';
module.exports = (sequelize, DataTypes) => {
  var Visitor = sequelize.define('Visitor', {
    id: DataTypes.INT,
    createdAt: DataTypes.STRING,
    firstTimeUser: DataTypes.STRING,
    visitCount: DataTypes.INT,
    numPagesVisited: DataTypes.INT,
    layoutType: DataTypes.STRING
  }, {});
  Visitor.associate = function(models) {
    // associations can be defined here
  };
  return Visitor;
};