import { Router } from 'express';
import { registrosController } from '../controllers/registrosController';

class RegistrosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', registrosController.list);
        this.router.get('/nombre', registrosController.listNombre);
        this.router.get('/:id', registrosController.getOne);
        this.router.post('/', registrosController.create);
        this.router.put('/:id', registrosController.update);
        this.router.delete('/:id', registrosController.delete);
    }
}

const registrosRoutes = new RegistrosRoutes();
export default registrosRoutes.router;