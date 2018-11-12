const Sequelize = require('sequelize');
const { db, Vegetable, Gardener, Plot } = require('./models');

// db.authenticate()
//   .then(function() {
//     console.log('database is connected');
//   })
//   .catch(err => console.log(err));
Vegetable.create({
  name: 'carrot',
  color: 'orange',
  planted_on: Date.now(),
});

db.sync({ force: false })
  .then(() => {
    console.log('passed');
    db.close();
  })
  .catch(err => {
    console.log(err);
    console.log('failed');

    db.close();
  });

Vegetable.create({
  name: 'carrot',
  color: 'orange',
  planted_on: Date.now(),
})
  .then(carrot => {
    return Gardener.create({
      name: `Ol' MacDonald`,
      age: 120,
      favoriteVegetableId: carrot.id,
    });
  })
  .then(gardener => {
    return Plot.create({
      size: 4003,
      shaded: true,
      gardenerId: gardener.id,
    });
  })
  .then(plot => {})
  .catch(err => console.log(err));
