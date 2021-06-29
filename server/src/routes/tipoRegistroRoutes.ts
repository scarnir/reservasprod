import { Router } from 'express';
import { tipoRegistroController } from'../controllers/tipoRegistroController';

class RegistrosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', tipoRegistroController.list);
        this.router.get('/:id', tipoRegistroController.getOne);
    }
}

const registrosRoutes = new RegistrosRoutes();
export default registrosRoutes.router;