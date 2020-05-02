
//this removes all tables in correct order before any seed files run
//excluding the two tables that track migrations
const cleaner = require('knex-cleaner');

exports.seeds = function(knex) {
  return cleaner.clean(knex, {
    mode: 'truncate', //resets ids
     ignoreTables: ['knex_migrations', 'knex_migrations_lock'] //won't empty migration tables
  });
};