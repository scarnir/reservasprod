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
exports.ciudadesController = void 0;
const database_1 = __importDefault(require("../database"));
class CiudadesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ciudades = yield database_1.default.query('SELECT * FROM ciudades');
            res.json(ciudades);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const ciudades = yield database_1.default.query('SELECT * FROM ciudades WHERE id = ?', [id]);
            if (ciudades.length > 0) {
                return res.json(ciudades[0]);
            }
            res.status(404).json({ text: 'La ciudad no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { ciudad } = req.body;
            const resultado = yield database_1.default.query('SELECT * FROM ciudades WHERE ciudad = ?', [ciudad]);
            if (resultado.length > 0) {
                res.status(404).json({ text: 'La ciudad ya existe' });
            }
            else {
                yield database_1.default.query('INSERT INTO ciudades set ?', [req.body]);
                console.log(req.body);
                res.send({ type: 'success', message: '¡La ciudad ha sido creada exitosamente!' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { ciudad } = req.body;
            const resultado = yield database_1.default.query('SELECT * FROM ciudades WHERE ciudad = ?', [ciudad]);
            if (resultado.length > 0) {
                res.status(404).json({ text: 'La ciudad ya existe' });
            }
            else {
                yield database_1.default.query('UPDATE ciudades SET ? WHERE id = ?', [req.body, id]);
                res.send({ type: 'success', message: '¡La ciudad ha sido actualizada exitosamente!' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM ciudades WHERE id = ?', [id]);
            res.send({ type: 'success', message: '¡La ciudad ha sido eliminada exitosamente!' });
        });
    }
}
exports.ciudadesController = new CiudadesController();
