const db = require('../data/db-config');
const knex = require('knex')

const getRecipes = () => {
    return db('recipes');
}

const getshoppingList = (recipe_id) => {
    //get the ingredients associated with the recipe id and the count of the ingedients needed.
    return db('recipes')
    .join('recipes_ingredients', 'recipes_ingredients.recipeID', 'recipes.id')
    .where('recipes.id','=', recipe_id)
    .select('recipes.recipeName','recipes_ingredients.ingredientQuantity' ,'recipes_ingredients.quantityType')
    .join('ingredients', 'recipes_ingredients.ingredientID', '=', 'ingredients.id')
    .select('ingredientName');
}

const getInstructions = (recipe_id) => {
    return db('recipes')
    .join('instructions', 'instructions.recipeID', 'recipes.id')
    .where('recipes.id', '=', recipe_id)
    .select('recipeName', 'stepOrder', 'stepDetails')
    .orderBy('stepOrder', "asc");
   
   
}


module.exports = {
    getRecipes,
    getshoppingList,
    getInstructions
}