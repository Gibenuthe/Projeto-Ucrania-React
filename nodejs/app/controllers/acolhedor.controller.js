const db = require("../models");
const Acolhedor = db.acolhedores;

// Create and Save a new Acolhedor
exports.create = (req, res) => {
    if (!req.body.pais) {
        res.status(400).send({ message: "Não pode ficar vazio!" });
        return;
      }
    
      // Cria um acolhedor
      const acolhedor = new Acolhedor({
        nome: req.body.nome,
        fone: req.body.fone,
        email: req.body.email,
        pais: req.body.pais,
        pessoas: req.body.pessoas,
        animais: req.body.animais,
        idiomas: req.body.idiomas,
      });
    
      // Salva acolhedor no banco
      acolhedor
        .save(acolhedor)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Erro ao cadastrar acolhedor."
          });
        });
    };


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const pais = req.query.pais;
    var condition = pais ? { pais: { $regex: new RegExp(pais), $options: "i" } } : {};
  
    Acolhedor.find(condition)
      .then(data => {
        res.send(data);
        })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro ao obter acolhedores."
        });
        });
};

// Find a single Acolhedor with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Acolhedor.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Não encontrou acolhedor com id: " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Erro buscando acolhedor com id=" + id });
      });
};

// Update a Acolhedor by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Dados para atualizar não podem estar vazios!"
        });
      }
    
      const id = req.params.id;
    
      Acolhedor.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Não foi possível atualizar acolhedor com id=${id}. Talvez não tenha sido encontrado!`
            });
          } else res.send({ message: "Acolhedor atualizado com sucesso!." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Erro atualizando acolhedor com id=" + id
          });
        });
};

// Delete a Acolhedor with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Acolhedor.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Não foi possível atualizar acolhedor com id=${id}. Talvez não tenha sido encontrado!`
          });
        } else {
          res.send({
            message: "Acolhedor deletado com sucesso!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro deletando acolhedor com id=" + id
        });
      });
  };
  
  // Deleta todos acolhedores do banco.
  exports.deleteAll = (req, res) => {
    Acolhedor.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Acolhedores deletados com sucesso!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro removendo todos os acolhedores."
        });
      });
  };
  
  // Encontrar todos os acolhedores
  exports.findAllPublished = (req, res) => {
    Acolhedor.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Erro ao buscar todos os acolhedores."
        });
      });
  };