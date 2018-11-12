const { db, Gardener, Plot, Vegetable } = require('./model.js');

db.sync({force: false})
.then(() => console.log('Sucessfully connected to the database'))
.then(() => Vegetable.bulkCreate([
  {name: 'beet', color: 'purple'},
  {name: 'broccoli', color: 'green'},
  {name: 'tomato', color: 'red'}
]))
.catch((err) => console.log(err.message))
.finally(() => db.close());


