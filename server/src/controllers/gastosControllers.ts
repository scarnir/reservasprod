import { Request, Response } from "express";

import  db  from "../database";

class GastosController {
    public async list (req: Request, res: Response) {
        const gastos = await db.query('SELECT * FROM gastos');
        res.json(gastos);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const resultado = await db.query('SELECT * FROM gastos WHERE id = ?', [id]);
        if (resultado.length > 0) {
            return res.json(resultado[0]);
        }
        res.status(404).json({text: 'El gasto no existe'});
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO gastos set ?', [req.body]);
        res.send({type: 'success', message: '¡El gasto ha sido creado exitosamente!'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE gastos SET ? WHERE id = ?', [req.body, id]);
        res.send({type: 'success', message: '¡La ciudad ha sido actualizada exitosamente!'});        
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM gastos WHERE id = ?', [id]);
        res.send({type: 'success', message: '¡El gasto ha sido eliminado exitosamente!'});
    }

}

export const gastosController = new GastosController();