module.exports = mongoose => {
    var Acolhedor = mongoose.model(
      "acolhedor",
      mongoose.Schema(
        {
            nome: { type: String, required: true },
            fone: { type: String, required: false, default: "00000000" },
            email: { type: String, required: true },
            pais: { type: String, required: true, default: "Ucrania"},
            pessoas: { type: Number, required: true, default: 1},
            animais: { type: Boolean, required: true, default: false},
            idiomas: { type: String, required: true}
          },
          { timestamps: true }
      )
    );
  

    
    return Acolhedor;
  };