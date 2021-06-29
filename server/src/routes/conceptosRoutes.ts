import { Router } from 'express';
import { conceptosController } from'../controllers/conceptosController';

class ConceptosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', conceptosController.list);
        this.router.get('/:id', conceptosController.getOne);
        this.router.get('/tipo/:id', conceptosController.getType);
        this.router.post('/', conceptosController.create);
        this.router.put('/:id', conceptosController.update);
        this.router.delete('/:id', conceptosController.delete);
    }
}

const conceptosRoutes = new ConceptosRoutes();
export default conceptosRoutes.router;