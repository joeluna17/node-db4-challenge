
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {id: 1, ingredientName: "Strawberry"},
        {id: 2, ingredientName: "Raspberry"},
        {id: 3, ingredientName: "Milk"},
        {id: 4, ingredientName: "Orange Juice"},
        {id: 5, ingredientName: "Ice"},
        {id: 6, ingredientName: "Flower"},
        {id: 7, ingredientName: "Egg"},
        {id: 8, ingredientName: "Oil"},
        {id: 9, ingredientName: "Chuck Meat"},
        {id: 10, ingredientName: "Chicken Breast"},
        {id: 11, ingredientName: "Salt"},
        {id: 12, ingredientName: "Pepper"},
        {id: 13, ingredientName: "Blue Cheese"},
        {id: 14, ingredientName: "Bread"},
      ]);
};
