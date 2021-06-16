import { Router } from 'express';
import { tarjetasController } from '../controllers/tarjetasController';

class TarjetasRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', tarjetasController.list);
        this.router.get('/:id', tarjetasController.getOne);
        this.router.post('/', tarjetasController.create);
        this.router.put('/:id', tarjetasController.update);
        this.router.delete('/:id', tarjetasController.delete);
    }
}

const tarjetasRoutes = new TarjetasRoutes();
export default tarjetasRoutes.router;