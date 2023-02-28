import { Proyecto } from "../models/Proyecto";
import { Usuario } from "../models/Usuario";
export declare class Avance {
    id: string;
    proyecto?: Proyecto;
    proyectoId: string;
    fecha: Date;
    descripcion: string;
    observaciones: string;
    estudiante?: Usuario;
    usuarioId: string;
}
