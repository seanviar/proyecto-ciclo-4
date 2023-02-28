import { Avance } from "../models/Avance";
import { Inscripcion } from "../models/Inscripcion";
import { Usuario } from "../models/Usuario";
import { ProyectoCount } from "../resolvers/outputs/ProyectoCount";
export declare class Proyecto {
    id: string;
    nombre: string;
    objetivosGenerales: string;
    objetivosEspesificos: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin?: Date | null;
    lider?: Usuario;
    usuarioId: string;
    estado: "Activo" | "Inactivo";
    fase?: "Iniciado" | "En_Desarrollo" | "Terminado" | null;
    avance?: Avance[];
    inscripcion?: Inscripcion[];
    _count?: ProyectoCount | null;
}
