import { Request, Response } from "express";

import  db  from "../database";

class BancosController {
    public async list (req: Request, res: Response) {
        const bancos = await db.query('SELECT * FROM bancos');
        res.json(bancos);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const resultado = await db.query('SELECT * FROM bancos WHERE id = ?', [id]);
        if (resultado.length > 0) {
            return res.json(resultado[0]);
        }
        res.status(404).json({text: 'El banco no existe'});
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO bancos set ?', [req.body]);
        res.send({type: 'success', message: '¡El banco ha sido creado exitosamente!'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE bancos SET ? WHERE id = ?', [req.body, id]);
        res.send({type: 'success', message: '¡El banco ha sido actualizada exitosamente!'});        
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM bancos WHERE id = ?', [id]);
        res.send({type: 'success', message: '¡El banco ha sido eliminado exitosamente!'});
    }

}

export const bancosController = new BancosController();