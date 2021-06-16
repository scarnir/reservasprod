import { Router } from 'express';
import { bancosController } from '../controllers/bancosController';

class BancosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', bancosController.list);
        this.router.get('/:id', bancosController.getOne);
        this.router.post('/', bancosController.create);
        this.router.put('/:id', bancosController.update);
        this.router.delete('/:id', bancosController.delete);
    }
}

const bancosRoutes = new BancosRoutes();
export default bancosRoutes.router;