"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ReservasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Reservas'));
    }
}
const reservasRoutes = new ReservasRoutes();
exports.default = reservasRoutes.router;
