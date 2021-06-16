import { Router } from 'express';
import { ingresosController } from '../controllers/ingresosController';


class IngresosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', ingresosController.list);
        this.router.get('/:id', ingresosController.getOne);
        this.router.post('/', ingresosController.create);
        this.router.put('/:id', ingresosController.update);
        this.router.delete('/:id', ingresosController.delete);
    }
}

const ingresosRoutes = new IngresosRoutes();
export default ingresosRoutes.router;