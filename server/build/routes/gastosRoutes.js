"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gastosControllers_1 = require("../controllers/gastosControllers");
class GastosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gastosControllers_1.gastosController.list);
        this.router.get('/:id', gastosControllers_1.gastosController.getOne);
        this.router.post('/', gastosControllers_1.gastosController.create);
        this.router.put('/:id', gastosControllers_1.gastosController.update);
        this.router.delete('/:id', gastosControllers_1.gastosController.delete);
    }
}
const gastosRoutes = new GastosRoutes();
exports.default = gastosRoutes.router;
