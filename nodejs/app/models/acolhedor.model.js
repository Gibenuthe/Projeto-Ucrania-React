module.exports = mongoose => {
  var schema = mongoose.Schema(
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
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("Acolhedores", schema);
  return Tutorial;
};
