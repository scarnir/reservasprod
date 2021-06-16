import { Request, Response } from "express";

import  db  from "../database";

class RolesController {
    public async list (req: Request, res: Response) {
        const roles = await db.query('SELECT * FROM roles');
        res.json(roles);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const roles = await db.query('SELECT * FROM roles WHERE id = ?', [id]);
        if (roles.length > 0) {
            return res.json(roles[0]);
        }
        res.status(404).json({text: 'El rol no existe'});
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        const { nombre } = req.body;
        const resultado = await db.query('SELECT * FROM roles WHERE nombre = ?', [nombre]);
        if (resultado.length > 0) {
            res.status(404).json({text: 'El rol ya existe'});
        } else {
            await db.query('INSERT INTO roles set ?', [req.body]);
            console.log(req.body);
            res.send({type: 'success', message: '¡El rol ha sido creado exitosamente!'});
        }
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { nombre } = req.body;
        const resultado = await db.query('SELECT * FROM roles WHERE nombre = ?', [nombre]);
        if (resultado.length > 0) {
            res.status(404).json({text: 'El rol ya existe'});
        } else {
            await db.query('UPDATE roles SET ? WHERE id = ?', [req.body, id]);
            res.send({type: 'success', message: '¡El rol ha sido actualizado exitosamente!'});
        }
        
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM roles WHERE id = ?', [id]);
        res.send({type: 'success', message: '¡El usuario ha sido eliminado exitosamente!'});
    }
}

export const rolesController = new RolesController();