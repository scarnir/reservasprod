import { Router } from 'express';
import { asocrolController } from '../controllers/asocrolController';

class AsocrolRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', asocrolController.list);
        this.router.get('/nombres', asocrolController.listNombres);
        this.router.get('/:id', asocrolController.getOne);
        this.router.get('/usuario/:id', asocrolController.getOneUsuario);
        this.router.get('/rol/:id', asocrolController.getOneRol);
        this.router.post('/', asocrolController.create);
        this.router.put('/:id', asocrolController.update);
        this.router.delete('/:id', asocrolController.delete);
    }
}

const asocrolRoutes = new AsocrolRoutes();
export default asocrolRoutes.router;
