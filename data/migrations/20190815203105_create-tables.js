
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments('id');   
        tbl.text('recipeName',128)
        .unique()
        .notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments('id');
        tbl.text('ingredientName',128)
        .notNullable()
        .unique();
    })
    .createTable('instructions', tbl => {
        tbl.increments('id');
        tbl.integer('stepOrder')
        .unsigned()
        .notNullable();
        tbl.text('stepDetails',128)
        .notNullable();
        tbl.integer('recipeID')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('recipes_ingredients', tbl => {
        tbl.increments('id');
        tbl.float('ingredientQuantity')
        .notNullable();
        tbl.text('quantityType',128)
        .notNullable();
        tbl.integer('recipeID')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl.integer('ingredientID')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
        .dropTableIfExists('recipes_ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
