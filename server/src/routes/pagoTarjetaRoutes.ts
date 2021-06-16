import { Router } from 'express';
import { pagoTarjetaController } from '../controllers/pagoTarjetaController';

class PagoTarjetaRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', pagoTarjetaController.list);
        this.router.get('/nombre', pagoTarjetaController.listNombre);
        this.router.get('/:id', pagoTarjetaController.getOne);
        this.router.post('/', pagoTarjetaController.create);
        this.router.put('/:id', pagoTarjetaController.update);
        this.router.delete('/:id', pagoTarjetaController.delete);
    }
}

const pagoTarjetaRoutes = new PagoTarjetaRoutes();
export default pagoTarjetaRoutes.router;