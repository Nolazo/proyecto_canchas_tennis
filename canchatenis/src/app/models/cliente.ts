export class Cliente {
    _id?: string;
    rut?: string;
    nombre?: string;
    apellido?: string;
    telefono?: string;
    correo?: String;
    nacimiento?: Date;
    empresa?: any;
    tipoCliente?: any;
    visitas?: number;
    //logica de la acc
    username?: string;
    password?: string;
    bloqueado?: boolean;
}