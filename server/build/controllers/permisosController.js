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
exports.permisosController = void 0;
const database_1 = __importDefault(require("../database"));
class PermisosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const permisos = yield database_1.default.query('SELECT * FROM permisos');
            res.json(permisos);
        });
    }
    listNombres(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const permisos = yield database_1.default.query('SELECT b.id, a.nombre, b.actualizar, b.inactivar, b.crear FROM roles a, permisos b WHERE a.id = b.idRol');
            res.json(permisos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const permisos = yield database_1.default.query('SELECT * FROM permisos WHERE id = ?', [id]);
            if (permisos.length > 0) {
                return res.json(permisos[0]);
            }
            res.status(404).json({ text: 'El rol no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idRol } = req.body;
            const resultado = yield database_1.default.query('SELECT * FROM permisos WHERE idRol = ?', [idRol]);
            if (resultado.length > 0) {
                res.send({ type: 'danger', message: 'El rol ya está asociado al permiso.' });
            }
            else {
                yield database_1.default.query('INSERT INTO permisos set ?', [req.body]);
                res.send({ type: 'success', message: '¡El permiso ha sido creado exitosamente!' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM permisos WHERE id = ?', [id]);
            res.send({ type: 'success', message: '¡El permiso ha sido eliminado exitosamente!' });
        });
    }
}
exports.permisosController = new PermisosController();
