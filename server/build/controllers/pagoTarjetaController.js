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
exports.pagoTarjetaController = void 0;
const database_1 = __importDefault(require("../database"));
class PagoTarjetaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pago_tarjeta = yield database_1.default.query('SELECT * FROM pago_tarjeta');
            res.json(pago_tarjeta);
        });
    }
    listNombre(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cuentas_bancarias = yield database_1.default.query('SELECT a.nro_tarjeta, b.nombre, a.descripcion FROM pago_tarjeta a, tarjetas b WHERE a.id_tarjeta = b.id;');
            res.json(cuentas_bancarias);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resultado = yield database_1.default.query('SELECT * FROM pago_tarjeta WHERE id = ?', [id]);
            if (resultado.length > 0) {
                return res.json(resultado[0]);
            }
            res.status(404).json({ text: 'La forma de pago no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO pago_tarjeta set ?', [req.body]);
            res.send({ type: 'success', message: '¡La forma de pago ha sido creado exitosamente!' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE pago_tarjeta SET ? WHERE id = ?', [req.body, id]);
            res.send({ type: 'success', message: '¡La forma de pago ha sido actualizada exitosamente!' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM pago_tarjeta WHERE id = ?', [id]);
            res.send({ type: 'success', message: '¡La forma de pago ha sido eliminado exitosamente!' });
        });
    }
}
exports.pagoTarjetaController = new PagoTarjetaController();
