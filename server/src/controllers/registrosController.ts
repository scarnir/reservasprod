import { Request, Response } from "express";

import  db  from "../database";

class RegistrosController {
    public async list (req: Request, res: Response) {
        const registros_contables = await db.query('SELECT * FROM registros_contables');
        res.json(registros_contables);
    }

    public async listNombre (req: Request, res: Response) {
        const registros_contables = await db.query('SELECT a.id, a.monto, b.tipo, c.nombre, a.descripcion FROM registros_contables a, tipo_registro b, conceptos c WHERE b.id = a.id_tipo AND c.id = a.id_concepto');
        res.json(registros_contables);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const registros_contables = await db.query('SELECT * FROM registros_contables WHERE id = ?', [id]);
        if (registros_contables.length > 0) {
            return res.json(registros_contables[0]);
        }
        res.status(404).json({text: 'El registro contable no existe'});
    }
    
    public async create (req: Request, res: Response): Promise<void> {
        const { id } = req.body;
        const resultado = await db.query('SELECT * FROM registros_contables WHERE id = ?', [id]);
        if (resultado.length > 0) {
            res.status(404).json({text: 'El registro contable ya existe'});
        } else {
            await db.query('INSERT INTO registros_contables set ?', [req.body]);
            console.log(req.body);
            res.send({type: 'success', message: '¡El registro contable ha sido creado exitosamente!'});
        }
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('UPDATE registros_contables SET ? WHERE id = ?', [req.body, id]);
        res.send({type: 'success', message: '¡El registro contable ha sido actualizado exitosamente!'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await db.query('DELETE FROM registros_contables WHERE id = ?', [id]);
        res.send({type: 'success', message: '¡El registro contable ha sido eliminado exitosamente!'});
    }
}

export const registrosController = new RegistrosController();