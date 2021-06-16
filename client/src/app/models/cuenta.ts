export interface Cuenta {
    id?: number;
    nro_cuenta?: number;
    id_banco?: number;
    descripcion?: string;
    nombre_titular?: string;
    telefono?: string;
    correo?: string;
    fax?: string;
    created_at?: Date;
    updated_at?: Date;
}