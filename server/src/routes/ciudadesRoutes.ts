import { Router } from 'express';
import { ciudadesController } from '../controllers/ciudadesController';

class CiudadesRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', ciudadesController.list);
        this.router.get('/:id', ciudadesController.getOne);
        this.router.post('/', ciudadesController.create);
        this.router.put('/:id', ciudadesController.update);
        this.router.delete('/:id', ciudadesController.delete);
    }
}

const ciudadesRoutes = new CiudadesRoutes();
export default ciudadesRoutes.router;