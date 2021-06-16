"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolesController = void 0;
const database_1 = __importDefault(require("../database"));
class RolesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const roles = yield database_1.default.query('SELECT * FROM roles');
            res.json(roles);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const roles = yield database_1.default.query('SELECT * FROM roles WHERE id = ?', [id]);
            if (roles.length > 0) {
                return res.json(roles[0]);
            }
            res.status(404).json({ text: 'El rol no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.body;
            const resultado = yield database_1.default.query('SELECT * FROM roles WHERE nombre = ?', [nombre]);
            if (resultado.length > 0) {
                res.status(404).json({ text: 'El rol ya existe' });
            }
            else {
                yield database_1.default.query('INSERT INTO roles set ?', [req.body]);
                console.log(req.body);
                res.send({ type: 'success', message: '¡El rol ha sido creado exitosamente!' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nombre } = req.body;
            const resultado = yield database_1.default.query('SELECT * FROM roles WHERE nombre = ?', [nombre]);
            if (resultado.length > 0) {
                res.status(404).json({ text: 'El rol ya existe' });
            }
            else {
                yield database_1.default.query('UPDATE roles SET ? WHERE id = ?', [req.body, id]);
                res.send({ type: 'success', message: '¡El rol ha sido actualizado exitosamente!' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM roles WHERE id = ?', [id]);
            res.send({ type: 'success', message: '¡El usuario ha sido eliminado exitosamente!' });
        });
    }
}
exports.rolesController = new RolesController();
