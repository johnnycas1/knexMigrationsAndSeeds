
exports.up = function(knex, Promise) {
  return knex.schema.createTable("hero", hero => {
    hero.increments();
    hero.integer("movies");
    hero.text("heroName")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("hero");
};
