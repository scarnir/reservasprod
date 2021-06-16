import { Request, Response } from "express";

import  db  from "../database";

class AsocrolController {
    public async list (req: Request, res: Response) {
        const asocroles = await db.query('SELECT * FROM asocrol');
        res.json(asocroles);
    }

    public async listNombres (req: Request, res: Response) {
        const asocroles = await db.query('SELECT c.id, a.nombre, b.usuario FROM asocrol c, roles a, usuarios b WHERE a.id = c.idRol AND b.id = c.idUsuario');
        res.json(asocroles);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const asocroles = await db.query('SELECT * FROM asocrol WHERE id = ?', [id]);
        if (asocroles.length > 0) {
            return res.json(asocroles[0]);
        }
        res.status(404).json({text: 'La asociación no existe'});
    }

    public async getOneUsuario (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const asocroles = await db.query('SELECT * FROM asocrol WHERE idUsuario = ?', [id]);
        if (asocroles.length > 0) {
            return res.json(asocroles[0]);
        }
        res.status(404).json({text: 'La asociación no existe'});
    }

    public async getOneRol (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const asocroles = await db.query('SELECT * FROM asocrol WHERE idRol = ?', [id]);
        if (asocroles.length > 0) {
            return res.json(asocroles[0]);
        }
        res.status(404).json({text: 'La asociación no existe'});
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        const { idUsuario } = req.body;
        const resultado = await db.query('SELECT * FROM asocrol WHERE idUsuario = ?', [idUsuario]);
        if (resultado.length > 0) {
            res.send({type: 'danger', message: 'Este usuario ya posee un rol.'});
        } else {
            await db.query('INSERT INTO asocrol set ?', [req.body]);
            res.send({type: 'success', message: '¡La asociación ha sido creada exitosamente!'});
        }
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE asocrol SET ? WHERE id = ?', [req.body, id]);
        res.send({type: 'success', message: '¡La asociación ha sido actualizada exitosamente!'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM asocrol WHERE id = ?', [id]);
        res.send({type: 'success', message: '¡La asociación ha sido eliminada exitosamente!'});
    }
}

export const asocrolController = new AsocrolController();