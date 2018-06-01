
exports.seed = function(knex, Promise) {
  return knex('hero').del()
    .then(function () {
      return knex('hero').insert([{
          id: 1,
          movies: 10,
          heroName: "Batman"
        },
        {
          id: 2,
          movies: 6,
          heroName: "Wolverine"
        },
        {
          id: 3,
          movies: 4,
          heroName: "Iron Man"
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE hero_id_seq RESTART WITH 4;");
    });
};
