"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ciudadesController_1 = require("../controllers/ciudadesController");
class CiudadesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ciudadesController_1.ciudadesController.list);
        this.router.get('/:id', ciudadesController_1.ciudadesController.getOne);
        this.router.post('/', ciudadesController_1.ciudadesController.create);
        this.router.put('/:id', ciudadesController_1.ciudadesController.update);
        this.router.delete('/:id', ciudadesController_1.ciudadesController.delete);
    }
}
const ciudadesRoutes = new CiudadesRoutes();
exports.default = ciudadesRoutes.router;
