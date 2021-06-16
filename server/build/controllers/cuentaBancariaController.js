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
exports.cuentaBancariaController = void 0;
const database_1 = __importDefault(require("../database"));
class CuentaBancariaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cuentas_bancarias = yield database_1.default.query('SELECT * FROM cuentas_bancarias');
            res.json(cuentas_bancarias);
        });
    }
    listNombre(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cuentas_bancarias = yield database_1.default.query('SELECT a.nro_cuenta, b.nombre, a.descripcion, a.nombre_titular FROM cuentas_bancarias a, bancos b WHERE a.id_banco = b.id;');
            res.json(cuentas_bancarias);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resultado = yield database_1.default.query('SELECT * FROM cuentas_bancarias WHERE id = ?', [id]);
            if (resultado.length > 0) {
                return res.json(resultado[0]);
            }
            res.status(404).json({ text: 'La cuenta bancaria no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO cuentas_bancarias set ?', [req.body]);
            res.send({ type: 'success', message: '¡La cuenta bancaria ha sido creado exitosamente!' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE cuentas_bancarias SET ? WHERE id = ?', [req.body, id]);
            res.send({ type: 'success', message: '¡La cuenta bancaria ha sido actualizada exitosamente!' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM cuentas_bancarias WHERE id = ?', [id]);
            res.send({ type: 'success', message: '¡La cuenta bancaria ha sido eliminado exitosamente!' });
        });
    }
}
exports.cuentaBancariaController = new CuentaBancariaController();
