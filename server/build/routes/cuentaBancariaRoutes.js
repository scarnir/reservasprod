"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuentaBancariaController_1 = require("../controllers/cuentaBancariaController");
class CuentaBancariaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cuentaBancariaController_1.cuentaBancariaController.list);
        this.router.get('/nombre', cuentaBancariaController_1.cuentaBancariaController.listNombre);
        this.router.get('/:id', cuentaBancariaController_1.cuentaBancariaController.getOne);
        this.router.post('/', cuentaBancariaController_1.cuentaBancariaController.create);
        this.router.put('/:id', cuentaBancariaController_1.cuentaBancariaController.update);
        this.router.delete('/:id', cuentaBancariaController_1.cuentaBancariaController.delete);
    }
}
const cuentaBancariaRoutes = new CuentaBancariaRoutes();
exports.default = cuentaBancariaRoutes.router;
