import { Request, Response } from "express";

import  db  from "../database";

class ConceptosController {
    public async list (req: Request, res: Response) {
        const conceptos = await db.query('SELECT * FROM conceptos');
        res.json(conceptos);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const conceptos = await db.query('SELECT * FROM conceptos WHERE id = ?', [id]);
        if (conceptos.length > 0) {
            return res.json(conceptos[0]);
        }
        res.status(404).json({text: 'El concepto no existe'});
    }

    public async getType (req: Request, res: Response): Promise<any> {
        const { id_tipo} = req.params;
        const conceptos = await db.query('SELECT * FROM conceptos WHERE id_tipo = ?', [id_tipo]);
        if (conceptos.length > 0) {
            return res.json(conceptos[0]);
        }
        res.status(404).json({text: 'El concepto no existe'});
    }

    public async create (req: Request, res: Response): Promise<void> {
        const { id } = req.body;
        const resultado = await db.query('SELECT * FROM conceptos WHERE id = ?', [id]);
        if (resultado.length > 0) {
            res.status(404).json({text: 'El concepto ya existe'});
        } else {
            await db.query('INSERT INTO conceptos set ?', [req.body]);
            console.log(req.body);
            res.send({type: 'success', message: '¡El concepto ha sido creado exitosamente!'});
        }
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE conceptos SET ? WHERE id = ?', [req.body, id]);
        res.send({type: 'success', message: '¡El concepto ha sido actualizado exitosamente!'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM conceptos WHERE id = ?', [id]);
        res.send({type: 'success', message: '¡El concepto ha sido eliminada exitosamente!'});
    }
}

export const conceptosController = new ConceptosController();