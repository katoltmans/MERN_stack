const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.post("/api/authors", AuthorController.createAuthor);
    app.get("/api/authors/:_id", AuthorController.findOneAuthor);
    app.put("/api/authors/:_id", AuthorController.updateAuthor);
    app.delete("/api/authors/:_id", AuthorController.deleteAuthor);
};
