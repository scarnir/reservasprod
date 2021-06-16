import { Router } from 'express';
import { gastosController } from '../controllers/gastosControllers';


class GastosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', gastosController.list);
        this.router.get('/:id', gastosController.getOne);
        this.router.post('/', gastosController.create);
        this.router.put('/:id', gastosController.update);
        this.router.delete('/:id', gastosController.delete);
    }
}

const gastosRoutes = new GastosRoutes();
export default gastosRoutes.router;