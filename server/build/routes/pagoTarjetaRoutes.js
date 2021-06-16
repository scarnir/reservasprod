"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pagoTarjetaController_1 = require("../controllers/pagoTarjetaController");
class PagoTarjetaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', pagoTarjetaController_1.pagoTarjetaController.list);
        this.router.get('/nombre', pagoTarjetaController_1.pagoTarjetaController.listNombre);
        this.router.get('/:id', pagoTarjetaController_1.pagoTarjetaController.getOne);
        this.router.post('/', pagoTarjetaController_1.pagoTarjetaController.create);
        this.router.put('/:id', pagoTarjetaController_1.pagoTarjetaController.update);
        this.router.delete('/:id', pagoTarjetaController_1.pagoTarjetaController.delete);
    }
}
const pagoTarjetaRoutes = new PagoTarjetaRoutes();
exports.default = pagoTarjetaRoutes.router;
