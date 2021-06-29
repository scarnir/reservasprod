import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import morgan from 'morgan';
import cors from 'cors';

import usuariosRoutes from './routes/usuariosRoutes';
import rolesRoutes from './routes/rolesRoutes';
import asocrolRoutes from './routes/asocrolRoutes';
import permisosRoutes from './routes/permisosRoutes';
import ciudadesRoutes from './routes/ciudadesRoutes';
import registrosRoutes from './routes/registrosRoutes';
import reservasRoutes from './routes/reservasRoutes';
import tipoRegistroRoutes from './routes/tipoRegistroRoutes';
import conceptosRoutes from './routes/conceptosRoutes';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/api/usuarios', usuariosRoutes);
        this.app.use('/api/roles', rolesRoutes);
        this.app.use('/api/asocroles', asocrolRoutes);
        this.app.use('/api/permisos', permisosRoutes);
        this.app.use('/api/ciudades', ciudadesRoutes);
        this.app.use('/api/registros', registrosRoutes);
        this.app.use('/api/tiporegistro', tipoRegistroRoutes);
        this.app.use('/api/conceptos', conceptosRoutes);
        this.app.use('/api/reservas', reservasRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port", this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();