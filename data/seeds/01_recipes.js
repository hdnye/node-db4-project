
exports.seed = async function(knex) {
  // Inserts seed entries
      await knex('recipes').insert([
        {name: 'Moscow Mule', ingredients: 'Vodka, Ginger Beer, Lime Juice, Mint', quantity: '1.5 oz Vodka, .5 oz Lime Juice, 3 oz Ginger Beer', instructions: 'Pour vodka, ginger beer and lime juice into glass over ice, stir until mixed. Add mint and serve'},
        {name: 'Tradtional Margarita', ingredients: 'Tequila, Orange Liqueur, Agave, Lime Juice', quantity: '2 oz Tequila, .5 oz Orange Liqueur, Squeeze of Agave, juice of 2 lime wedges', instructions: 'Add all ingredients to a shaker w/o ice and shake until frothy. Pour over ice in a rocks glass with a salted rim'},
        {name: 'Mojito', ingredients: 'White Rum, Lime Juice, Sugar Cane Juice (or substitute simple syrup), Soda Water, Mint ', quantity: '1.5 oz Rum, juice of 3 lime wedges, .5 oz Sugar Cane Juice', instructions: 'In collins glass, muddle limes, mint and sugar cane juice. Fill with ice. Add rum and top with soda water. Stir and serve.'},
        {name: '', ingredients: '', quantity: '', instructions: ''},
     ]);
  };
