const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr', {logging: false});

const Gardener = db.define('gardeners', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Plot = db.define('plots', {
  size: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  shaded: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

const Vegetable = db.define('vegetables', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  planted_on: {
    type: Sequelize.DATE
  }
});

Gardener.hasOne(Plot);
Plot.belongsTo(Gardener);

Vegetable.belongsToMany(Plot, {through: 'garden'});
Plot.belongsToMany(Vegetable, {through: 'garden'});

Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'});



module.exports = { db, Gardener, Plot, Vegetable };
