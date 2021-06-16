"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tarjetasController_1 = require("../controllers/tarjetasController");
class TarjetasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tarjetasController_1.tarjetasController.list);
        this.router.get('/:id', tarjetasController_1.tarjetasController.getOne);
        this.router.post('/', tarjetasController_1.tarjetasController.create);
        this.router.put('/:id', tarjetasController_1.tarjetasController.update);
        this.router.delete('/:id', tarjetasController_1.tarjetasController.delete);
    }
}
const tarjetasRoutes = new TarjetasRoutes();
exports.default = tarjetasRoutes.router;
