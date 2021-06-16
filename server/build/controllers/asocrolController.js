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
exports.asocrolController = void 0;
const database_1 = __importDefault(require("../database"));
class AsocrolController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const asocroles = yield database_1.default.query('SELECT * FROM asocrol');
            res.json(asocroles);
        });
    }
    listNombres(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const asocroles = yield database_1.default.query('SELECT c.id, a.nombre, b.usuario FROM asocrol c, roles a, usuarios b WHERE a.id = c.idRol AND b.id = c.idUsuario');
            res.json(asocroles);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const asocroles = yield database_1.default.query('SELECT * FROM asocrol WHERE id = ?', [id]);
            if (asocroles.length > 0) {
                return res.json(asocroles[0]);
            }
            res.status(404).json({ text: 'La asociación no existe' });
        });
    }
    getOneUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const asocroles = yield database_1.default.query('SELECT * FROM asocrol WHERE idUsuario = ?', [id]);
            if (asocroles.length > 0) {
                return res.json(asocroles[0]);
            }
            res.status(404).json({ text: 'La asociación no existe' });
        });
    }
    getOneRol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const asocroles = yield database_1.default.query('SELECT * FROM asocrol WHERE idRol = ?', [id]);
            if (asocroles.length > 0) {
                return res.json(asocroles[0]);
            }
            res.status(404).json({ text: 'La asociación no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUsuario } = req.body;
            const resultado = yield database_1.default.query('SELECT * FROM asocrol WHERE idUsuario = ?', [idUsuario]);
            if (resultado.length > 0) {
                res.send({ type: 'danger', message: 'Este usuario ya posee un rol.' });
            }
            else {
                yield database_1.default.query('INSERT INTO asocrol set ?', [req.body]);
                res.send({ type: 'success', message: '¡La asociación ha sido creada exitosamente!' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE asocrol SET ? WHERE id = ?', [req.body, id]);
            res.send({ type: 'success', message: '¡La asociación ha sido actualizada exitosamente!' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM asocrol WHERE id = ?', [id]);
            res.send({ type: 'success', message: '¡La asociación ha sido eliminada exitosamente!' });
        });
    }
}
exports.asocrolController = new AsocrolController();
