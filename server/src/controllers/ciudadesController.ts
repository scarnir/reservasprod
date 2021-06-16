import { Request, Response } from "express";

import  db  from "../database";

class CiudadesController {
    public async list (req: Request, res: Response) {
        const ciudades = await db.query('SELECT * FROM ciudades');
        res.json(ciudades);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const ciudades = await db.query('SELECT * FROM ciudades WHERE id = ?', [id]);
        if (ciudades.length > 0) {
            return res.json(ciudades[0]);
        }
        res.status(404).json({text: 'La ciudad no existe'});
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        const { ciudad } = req.body;
        const resultado = await db.query('SELECT * FROM ciudades WHERE ciudad = ?', [ciudad]);
        if (resultado.length > 0) {
            res.status(404).json({text: 'La ciudad ya existe'});
        } else {
            await db.query('INSERT INTO ciudades set ?', [req.body]);
            console.log(req.body);
            res.send({type: 'success', message: '¡La ciudad ha sido creada exitosamente!'});
        }
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { ciudad } = req.body;
        const resultado = await db.query('SELECT * FROM ciudades WHERE ciudad = ?', [ciudad]);
        if (resultado.length > 0) {
            res.status(404).json({text: 'La ciudad ya existe'});
        } else {
            await db.query('UPDATE ciudades SET ? WHERE id = ?', [req.body, id]);
            res.send({type: 'success', message: '¡La ciudad ha sido actualizada exitosamente!'});
        }
        
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM ciudades WHERE id = ?', [id]);
        res.send({type: 'success', message: '¡La ciudad ha sido eliminada exitosamente!'});
    }
}

export const ciudadesController = new CiudadesController();