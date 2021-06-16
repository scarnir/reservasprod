import { Request, Response } from "express";

import  db  from "../database";

class PermisosController {
    public async list (req: Request, res: Response) {
        const permisos = await db.query('SELECT * FROM permisos');
        res.json(permisos);
    }

    public async listNombres (req: Request, res: Response) {
        const permisos = await db.query('SELECT b.id, a.nombre, b.actualizar, b.inactivar, b.crear FROM roles a, permisos b WHERE a.id = b.idRol');
        res.json(permisos);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const permisos = await db.query('SELECT * FROM permisos WHERE id = ?', [id]);
        if (permisos.length > 0) {
            return res.json(permisos[0]);
        }
        res.status(404).json({text: 'El rol no existe'});
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        const { idRol } = req.body;
        const resultado = await db.query('SELECT * FROM permisos WHERE idRol = ?', [idRol]);
        if (resultado.length > 0) {
            res.send({type: 'danger', message: 'El rol ya está asociado al permiso.'});
        } else {
            await db.query('INSERT INTO permisos set ?', [req.body]);
            res.send({type: 'success', message: '¡El permiso ha sido creado exitosamente!'});
        }
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM permisos WHERE id = ?', [id]);
        res.send({type: 'success', message: '¡El permiso ha sido eliminado exitosamente!'});
    }

}

export const permisosController = new PermisosController();