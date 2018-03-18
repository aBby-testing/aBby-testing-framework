'use strict';
module.exports = (sequelize, DataTypes) => {
  var Visitor = sequelize.define('Visitor', {
    firstTimeUser: DataTypes.STRING,
    visitCount: DataTypes.INTEGER,
    numPagesVisited: DataTypes.INTEGER,
    layoutType: DataTypes.STRING
  }, {});
  Visitor.associate = function(models) {
    // associations can be defined here
  };
  return Visitor;
};