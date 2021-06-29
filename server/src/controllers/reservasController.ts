import { Request, Response } from "express";

import  db  from "../database";

class ReservasController {
    public async list (req: Request, res: Response) {
        const reservas = await db.query('SELECT * FROM reservas');
        res.json(reservas);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const reservas = await db.query('SELECT * FROM reservas WHERE id = ?', [id]);
        if (reservas.length > 0) {
            return res.json(reservas[0]);
        }
        res.status(404).json({text: 'La reserva no existe'});
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO reservas set ?', [req.body]);
        res.send({type: 'success', message: '¡La reserva ha sido creado exitosamente!'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE reservas SET ? WHERE id = ?', [req.body, id]);
        res.send({type: 'success', message: '¡La reserva ha sido actualizada exitosamente!'});        
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM reservas WHERE id = ?', [id]);
        res.send({type: 'success', message: '¡La reserva ha sido eliminado exitosamente!'});
    }

}

export const reservasController = new ReservasController();