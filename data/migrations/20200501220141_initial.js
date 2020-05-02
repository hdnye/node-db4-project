//create tables 
exports.up = async function (knex) {
  await knex.schema.createTable('recipes', (table) => {
      table.increments('id')
      table.text('name', 128).notNull().unique()
      table.string('ingredients', 128).notNull()
      table.float('quantity').notNull()
      table.string('instructions').notNull()
  })
 await knex.schema.createTable('ingredients', (table) => {
      table.increments('id')
      table.string('name', 128).notNull().unique()
      //creates FK & creates relationship to recipes table
      table.integer('ingredient_id').references('id').inTable('recipes')
});
//join table to let foreign keys talk to each other
 await knex.schema.createTable('recipes_ingredients', (table) => {
     table.integer('recipes_id')
          .references('id')
          .inTable('recipes')
    //CASCADE deletes/updates all records being referenced      
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
      table.integer('ingredients_id')
          .references('id')
          .inTable('ingredients')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
     //since there's no primary key, combine the two columns w an array
      table.primary(['recipes_id', 'ingredients_id'])
 })
};
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('join')
  await knex.schema.dropTableIfExists('ingredients')
  await knex.schema.dropTableIfExists('recipes')
 };
