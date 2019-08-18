
exports.seed = function(knex) {
      return knex('instructions').insert([
        {id: 1, recipeID: 1, stepOrder: 1, stepDetails:"Place Strawberries in Blender"},
        {id: 2, recipeID: 1, stepOrder: 2, stepDetails:"Place Raspberries in Blender"},
        {id: 3, recipeID: 1, stepOrder: 3, stepDetails:"Place Milk in Blender"},
        {id: 4, recipeID: 1, stepOrder: 4, stepDetails:"Place Orange Juice in Blender"},
        {id: 5, recipeID: 1, stepOrder: 5, stepDetails:"Place Ice in Blender"},
        {id: 6, recipeID: 1, stepOrder: 6, stepDetails:"Blend well into a smooth consistacy or about 20 seconds. Pour in glass and enjoy!"}
      ]);
 
};
