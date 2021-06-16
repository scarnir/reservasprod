import { Request, Response } from "express";

import  db  from "../database";

class UsuariosController {
    public async list (req: Request, res: Response) {
        const usuarios = await db.query('SELECT * FROM usuarios');
        res.json(usuarios);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const usuarios = await db.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        if (usuarios.length > 0) {
            return res.json(usuarios[0]);
        }
        res.status(404).json({text: 'El usuario no existe'});
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        const { usuario } = req.body;
        const resultado = await db.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario]);
        if (resultado.length > 0) {
            res.send({type: 'danger', message: 'El usuario ya existe'});
        } else {
            await db.query('INSERT INTO usuarios set ?', [req.body]);
            res.send({type: 'success', message: '¡El usuario ha sido creado exitosamente!'});
        }
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { usuario } = req.body;
        const resultado = await db.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario]);
        if (resultado.length > 0) {
            res.send({type: 'danger', message: 'El usuario ya existe'});
        } else {
            await db.query('UPDATE usuarios SET ? WHERE id = ?', [req.body, id]);
            res.send({type: 'success', message: '¡El usuario ha sido actualizado exitosamente!'});
        }
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM usuarios WHERE id = ?', [id]);
        res.send({type: 'success', message: '¡El usuario ha sido eliminado exitosamente!'});
    }
}

export const usuariosController = new UsuariosController();