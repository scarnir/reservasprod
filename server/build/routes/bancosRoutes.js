"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bancosController_1 = require("../controllers/bancosController");
class BancosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', bancosController_1.bancosController.list);
        this.router.get('/:id', bancosController_1.bancosController.getOne);
        this.router.post('/', bancosController_1.bancosController.create);
        this.router.put('/:id', bancosController_1.bancosController.update);
        this.router.delete('/:id', bancosController_1.bancosController.delete);
    }
}
const bancosRoutes = new BancosRoutes();
exports.default = bancosRoutes.router;
