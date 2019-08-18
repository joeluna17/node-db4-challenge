
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
        {id: 1, recipeName: "Berry Good Smoothie"},
        {id: 2, recipeName: "Chicken Tenders"},
        {id: 3, recipeName: "Black & Blue Burger"}
      ]);
};
