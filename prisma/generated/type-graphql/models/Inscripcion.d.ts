import { Proyecto } from "../models/Proyecto";
import { Usuario } from "../models/Usuario";
export declare class Inscripcion {
    id: string;
    proyecto?: Proyecto;
    estudiante?: Usuario;
    estado: "Acepdado" | "Rechazado" | "Pendiente";
    fechaIngreso: Date;
    usuarioId: string;
    proyectoId: string;
}
