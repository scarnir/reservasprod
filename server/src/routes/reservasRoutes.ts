import { Router } from 'express';
import { reservasController } from '../controllers/reservasController';

class RerservasRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', reservasController.list);
        this.router.get('/:id', reservasController.getOne);
        this.router.post('/', reservasController.create);
        this.router.put('/:id', reservasController.update);
        this.router.delete('/:id', reservasController.delete);
    }
}

const reservasRoutes = new RerservasRoutes();
export default reservasRoutes.router;