const database = require("./database-connection");

module.exports = {
    list() {
        return database("hero").select();
    },
    read(id) {
        return database("hero").select().where("id", id).first()
    },
    create(hero) {
        return database("hero")
            .insert(hero)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, hero){
    },
    delete(id){
    }
};
