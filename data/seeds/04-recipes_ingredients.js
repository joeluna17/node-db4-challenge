exports.seed = function(knex) {
  return knex('recipes_ingredients').truncate()
  .then(function(){
      return knex('recipes_ingredients').insert([
        {id: 1, recipeID: 1, ingredientID: 1, ingredientQuantity: 1.0, quantityType:'cups'},
        {id: 2, recipeID: 1, ingredientID: 2, ingredientQuantity: 1.0, quantityType:'cups'},
        {id: 3, recipeID: 1, ingredientID: 3, ingredientQuantity: 8.0, quantityType:'oz'},
        {id: 4, recipeID: 1, ingredientID: 4, ingredientQuantity: 4.5, quantityType:'oz'},
        {id: 5, recipeID: 1, ingredientID: 5, ingredientQuantity: 1.5, quantityType:'cups'},
      ]);
    });
};
