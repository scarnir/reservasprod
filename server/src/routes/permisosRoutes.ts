import { Router } from 'express';
import { permisosController } from '../controllers/permisosController';

class PermisosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', permisosController.list);
        this.router.get('/nombres', permisosController.listNombres);
        this.router.get('/:id', permisosController.getOne);
        this.router.post('/', permisosController.create);
        this.router.delete('/:id', permisosController.delete);
    }
}

const permisosRoutes = new PermisosRoutes();
export default permisosRoutes.router;
