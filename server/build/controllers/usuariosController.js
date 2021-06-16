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
exports.usuariosController = void 0;
const database_1 = __importDefault(require("../database"));
class UsuariosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('SELECT * FROM usuarios');
            res.json(usuarios);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuarios = yield database_1.default.query('SELECT * FROM usuarios WHERE id = ?', [id]);
            if (usuarios.length > 0) {
                return res.json(usuarios[0]);
            }
            res.status(404).json({ text: 'El usuario no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { usuario } = req.body;
            const resultado = yield database_1.default.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario]);
            if (resultado.length > 0) {
                res.send({ type: 'danger', message: 'El usuario ya existe' });
            }
            else {
                yield database_1.default.query('INSERT INTO usuarios set ?', [req.body]);
                res.send({ type: 'success', message: '¡El usuario ha sido creado exitosamente!' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { usuario } = req.body;
            const resultado = yield database_1.default.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario]);
            if (resultado.length > 0) {
                res.send({ type: 'danger', message: 'El usuario ya existe' });
            }
            else {
                yield database_1.default.query('UPDATE usuarios SET ? WHERE id = ?', [req.body, id]);
                res.send({ type: 'success', message: '¡El usuario ha sido actualizado exitosamente!' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM usuarios WHERE id = ?', [id]);
            res.send({ type: 'success', message: '¡El usuario ha sido eliminado exitosamente!' });
        });
    }
}
exports.usuariosController = new UsuariosController();
