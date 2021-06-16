import { Router } from 'express';
import { cuentaBancariaController } from '../controllers/cuentaBancariaController';

class CuentaBancariaRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', cuentaBancariaController.list);
        this.router.get('/nombre', cuentaBancariaController.listNombre);
        this.router.get('/:id', cuentaBancariaController.getOne);
        this.router.post('/', cuentaBancariaController.create);
        this.router.put('/:id', cuentaBancariaController.update);
        this.router.delete('/:id', cuentaBancariaController.delete);
    }
}

const cuentaBancariaRoutes = new CuentaBancariaRoutes();
export default cuentaBancariaRoutes.router;