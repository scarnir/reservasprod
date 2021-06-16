"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asocrolController_1 = require("../controllers/asocrolController");
class AsocrolRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', asocrolController_1.asocrolController.list);
        this.router.get('/nombres', asocrolController_1.asocrolController.listNombres);
        this.router.get('/:id', asocrolController_1.asocrolController.getOne);
        this.router.get('/usuario/:id', asocrolController_1.asocrolController.getOneUsuario);
        this.router.get('/rol/:id', asocrolController_1.asocrolController.getOneRol);
        this.router.post('/', asocrolController_1.asocrolController.create);
        this.router.put('/:id', asocrolController_1.asocrolController.update);
        this.router.delete('/:id', asocrolController_1.asocrolController.delete);
    }
}
const asocrolRoutes = new AsocrolRoutes();
exports.default = asocrolRoutes.router;
