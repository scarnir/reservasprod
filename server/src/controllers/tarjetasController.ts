import { Request, Response } from "express";

import  db  from "../database";

class TarjetasController {
    public async list (req: Request, res: Response) {
        const tarjetas = await db.query('SELECT * FROM tarjetas');
        res.json(tarjetas);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const resultado = await db.query('SELECT * FROM tarjetas WHERE id = ?', [id]);
        if (resultado.length > 0) {
            return res.json(resultado[0]);
        }
        res.status(404).json({text: 'La tarjeta no existe'});
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO tarjetas set ?', [req.body]);
        res.send({type: 'success', message: '¡La tarjeta ha sido creado exitosamente!'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE tarjetas SET ? WHERE id = ?', [req.body, id]);
        res.send({type: 'success', message: '¡La tarjeta ha sido actualizada exitosamente!'});        
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM tarjetas WHERE id = ?', [id]);
        res.send({type: 'success', message: '¡La tarjeta ha sido eliminado exitosamente!'});
    }

}

export const tarjetasController = new TarjetasController();