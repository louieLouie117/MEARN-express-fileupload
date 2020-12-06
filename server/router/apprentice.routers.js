const apprenticeController = require("../controllers/apprentice.controllers");

module.exports = (app) => {
  app.post("/api/apprentice", apprenticeController.create);
  app.delete("/api/apprentice/delete/:id", apprenticeController.delete);
  app.get('/api/apprentice', apprenticeController.getAll);
  app.get("/api/apprentice/:id", apprenticeController.findSingleApprentice);
  app.put("/api/apprentice/update/:id", apprenticeController.update);
};                      

