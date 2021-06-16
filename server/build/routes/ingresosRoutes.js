"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ingresosController_1 = require("../controllers/ingresosController");
class IngresosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ingresosController_1.ingresosController.list);
        this.router.get('/:id', ingresosController_1.ingresosController.getOne);
        this.router.post('/', ingresosController_1.ingresosController.create);
        this.router.put('/:id', ingresosController_1.ingresosController.update);
        this.router.delete('/:id', ingresosController_1.ingresosController.delete);
    }
}
const ingresosRoutes = new IngresosRoutes();
exports.default = ingresosRoutes.router;
