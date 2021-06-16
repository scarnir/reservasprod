import { Request, Response } from "express";

import  db  from "../database";

class IngresosController {
    public async list (req: Request, res: Response) {
        const ingresos = await db.query('SELECT * FROM ingresos');
        res.json(ingresos);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const resultado = await db.query('SELECT * FROM ingresos WHERE id = ?', [id]);
        if (resultado.length > 0) {
            return res.json(resultado[0]);
        }
        res.status(404).json({text: 'El ingreso no existe'});
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO ingresos set ?', [req.body]);
        res.send({type: 'success', message: '¡El ingreso ha sido creado exitosamente!'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE ingresos SET ? WHERE id = ?', [req.body, id]);
        res.send({type: 'success', message: '¡El ingreso ha sido actualizada exitosamente!'});        
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM ingresos WHERE id = ?', [id]);
        res.send({type: 'success', message: '¡El ingreso ha sido eliminado exitosamente!'});
    }

}

export const ingresosController = new IngresosController();