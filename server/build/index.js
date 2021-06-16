"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const rolesRoutes_1 = __importDefault(require("./routes/rolesRoutes"));
const asocrolRoutes_1 = __importDefault(require("./routes/asocrolRoutes"));
const permisosRoutes_1 = __importDefault(require("./routes/permisosRoutes"));
const ciudadesRoutes_1 = __importDefault(require("./routes/ciudadesRoutes"));
const gastosRoutes_1 = __importDefault(require("./routes/gastosRoutes"));
const ingresosRoutes_1 = __importDefault(require("./routes/ingresosRoutes"));
const bancosRoutes_1 = __importDefault(require("./routes/bancosRoutes"));
const tarjetasRoutes_1 = __importDefault(require("./routes/tarjetasRoutes"));
const cuentaBancariaRoutes_1 = __importDefault(require("./routes/cuentaBancariaRoutes"));
const pagoTarjetaRoutes_1 = __importDefault(require("./routes/pagoTarjetaRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/usuarios', usuariosRoutes_1.default);
        this.app.use('/api/roles', rolesRoutes_1.default);
        this.app.use('/api/asocroles', asocrolRoutes_1.default);
        this.app.use('/api/permisos', permisosRoutes_1.default);
        this.app.use('/api/ciudades', ciudadesRoutes_1.default);
        this.app.use('/api/gastos', gastosRoutes_1.default);
        this.app.use('/api/ingresos', ingresosRoutes_1.default);
        this.app.use('/api/bancos', bancosRoutes_1.default);
        this.app.use('/api/tarjetas', tarjetasRoutes_1.default);
        this.app.use('/api/cuentas', cuentaBancariaRoutes_1.default);
        this.app.use('/api/pago', pagoTarjetaRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
