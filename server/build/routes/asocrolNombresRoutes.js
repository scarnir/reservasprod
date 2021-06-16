"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asocrolNombresController_1 = require("../controllers/asocrolNombresController");
class AsocrolNombresRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', asocrolNombresController_1.asocrolNombresController.list);
    }
}
const asocrolNombresRoutes = new AsocrolNombresRoutes();
exports.default = asocrolNombresRoutes.router;
