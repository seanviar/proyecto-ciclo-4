import { Avance } from "../models/Avance";
import { Inscripcion } from "../models/Inscripcion";
import { Proyecto } from "../models/Proyecto";
import { UsuarioCount } from "../resolvers/outputs/UsuarioCount";
export declare class Usuario {
    id: string;
    correo: string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: "Estudiante" | "Administrador" | "Lider";
    estado: "Pendiente" | "Autorizado" | "Desautorizado";
    inscripcion?: Inscripcion[];
    proyecto?: Proyecto[];
    avance?: Avance[];
    _count?: UsuarioCount | null;
}
