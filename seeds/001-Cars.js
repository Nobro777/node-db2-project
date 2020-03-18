
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
        vin: "139851891251",
        make: "Toyota",
        model: "4x4",
        milage: "232350",
        transmission: "Manual",
        title_status: "Salvaged"
      },
      ]);
    });
};
