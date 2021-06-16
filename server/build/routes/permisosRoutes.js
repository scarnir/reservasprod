"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const permisosController_1 = require("../controllers/permisosController");
class PermisosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', permisosController_1.permisosController.list);
        this.router.get('/nombres', permisosController_1.permisosController.listNombres);
        this.router.get('/:id', permisosController_1.permisosController.getOne);
        this.router.post('/', permisosController_1.permisosController.create);
        this.router.delete('/:id', permisosController_1.permisosController.delete);
    }
}
const permisosRoutes = new PermisosRoutes();
exports.default = permisosRoutes.router;
