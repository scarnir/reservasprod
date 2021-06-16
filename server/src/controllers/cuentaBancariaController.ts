import { Request, Response } from "express";

import  db  from "../database";

class CuentaBancariaController {
    public async list (req: Request, res: Response) {
        const cuentas_bancarias = await db.query('SELECT * FROM cuentas_bancarias');
        res.json(cuentas_bancarias);
    }

    public async listNombre (req: Request, res: Response) {
        const cuentas_bancarias = await db.query('SELECT a.nro_cuenta, b.nombre, a.descripcion, a.nombre_titular FROM cuentas_bancarias a, bancos b WHERE a.id_banco = b.id;');
        res.json(cuentas_bancarias);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const resultado = await db.query('SELECT * FROM cuentas_bancarias WHERE id = ?', [id]);
        if (resultado.length > 0) {
            return res.json(resultado[0]);
        }
        res.status(404).json({text: 'La cuenta bancaria no existe'});
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO cuentas_bancarias set ?', [req.body]);
        res.send({type: 'success', message: '¡La cuenta bancaria ha sido creado exitosamente!'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE cuentas_bancarias SET ? WHERE id = ?', [req.body, id]);
        res.send({type: 'success', message: '¡La cuenta bancaria ha sido actualizada exitosamente!'});        
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM cuentas_bancarias WHERE id = ?', [id]);
        res.send({type: 'success', message: '¡La cuenta bancaria ha sido eliminado exitosamente!'});
    }

}

export const cuentaBancariaController = new CuentaBancariaController();