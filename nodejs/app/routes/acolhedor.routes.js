module.exports = app => {
  const tutorials = require("../controllers/acolhedor.controller.js");

  var router = require("express").Router();

  // Cria um acolhedor
  router.post("/", tutorials.create);

  // Busca todos acolhedores
  router.get("/", tutorials.findAll);

  // Busca acolhedor pelo id
  router.get("/:id", tutorials.findOne);

  // Atualiza acolhedor pelo id
  router.put("/:id", tutorials.update);

  // Deleta acolhedor pelo id
  router.delete("/:id", tutorials.delete);

  // Cria novo acolhedor
  router.delete("/", tutorials.deleteAll);

  app.use("/api/acolhedores", router);
};
