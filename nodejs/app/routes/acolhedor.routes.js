module.exports = app => {
    const acolhedores = require("../controllers/acolhedor.controller.js");
  
    var router = require("express").Router();
  
    // Cria um acolhedor
    router.post("/", acolhedores.create);
  
    // Busca todos acolhedores
    router.get("/", acolhedores.findAll);
  
    // Busca acolhedor pelo id
    router.get("/:id", acolhedores.findOne);
  
    // Atualiza acolhedor pelo id
    router.put("/:id", acolhedores.update);
  
    // Deleta acolhedor pelo id
    router.delete("/:id", acolhedores.delete);
  
    // Cria novo acolhedor
    router.delete("/", acolhedores.deleteAll);
  
    app.use("/api/acolhedores", router);
  };