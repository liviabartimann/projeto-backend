const { Router } = require("express");
const UserController = require("./controllers/UserController");
const routes = Router();

routes.post("/usuario", UserController.store);

routes.get("/usuario/:email", UserController.index);

module.exports = routes;
