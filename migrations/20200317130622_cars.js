exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        
        tbl.increments();

        tbl
        .string("vin", 25)
        .notNullable()
        .unique()
        .index()

        tbl
        .string("make", 255)
        .notNullable()
        .index();

        tbl
        .string("model", 255)
        .notNullable()
        .index();

        tbl
        .string("milage", 255)
        .notNullable()
        .index();

        tbl
        .string("transmission", 255)
        .index();

        tbl
        .string("title_status", 255)
        .index();

    });
};

    exports.down = function(knex) {
        return knex.schema.dropTableIfExists("cars");
    };