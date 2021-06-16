import { Request, Response } from "express";

import  db  from "../database";

class PagoTarjetaController {
    public async list (req: Request, res: Response) {
        const pago_tarjeta = await db.query('SELECT * FROM pago_tarjeta');
        res.json(pago_tarjeta);
    }

    public async listNombre (req: Request, res: Response) {
        const cuentas_bancarias = await db.query('SELECT a.nro_tarjeta, b.nombre, a.descripcion FROM pago_tarjeta a, tarjetas b WHERE a.id_tarjeta = b.id;');
        res.json(cuentas_bancarias);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const resultado = await db.query('SELECT * FROM pago_tarjeta WHERE id = ?', [id]);
        if (resultado.length > 0) {
            return res.json(resultado[0]);
        }
        res.status(404).json({text: 'La forma de pago no existe'});
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO pago_tarjeta set ?', [req.body]);
        res.send({type: 'success', message: '¡La forma de pago ha sido creado exitosamente!'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE pago_tarjeta SET ? WHERE id = ?', [req.body, id]);
        res.send({type: 'success', message: '¡La forma de pago ha sido actualizada exitosamente!'});        
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM pago_tarjeta WHERE id = ?', [id]);
        res.send({type: 'success', message: '¡La forma de pago ha sido eliminado exitosamente!'});
    }

}

export const pagoTarjetaController = new PagoTarjetaController();