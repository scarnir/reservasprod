export interface Usuario {
    id?: number;
    usuario?: string;
    password?: string;
    nombre_completo?: string;
    phone?: string;
    address?: string;
    id_ciudad?: number;
    estado?: number;
    fecCreado?: Date;
    fecActualizado?: Date;
}