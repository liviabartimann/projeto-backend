const Usuarios = require("../models/User");

module.exports = {
  async store(req, res) {
    const usuario = await Usuarios.create(req.body);
    return res.json(usuario);
  },

  async index(req, res) {
    const usuario = await Usuarios.findOne({ email: req.params.email });
    return res.json(usuario);
  }
};
