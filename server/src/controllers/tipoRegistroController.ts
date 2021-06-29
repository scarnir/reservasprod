import { Request, Response } from "express";

import  db  from "../database";

class TipoRegistroController {
    public async list (req: Request, res: Response) {
        const tipo_registro = await db.query('SELECT * FROM tipo_registro');
        res.json(tipo_registro);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const tipo_registro = await db.query('SELECT * FROM tipo_registro WHERE id = ?', [id]);
        if (tipo_registro.length > 0) {
            return res.json(tipo_registro[0]);
        }
        res.status(404).json({text: 'El tipo de registro no existe'});
    }
}

export const tipoRegistroController = new TipoRegistroController();