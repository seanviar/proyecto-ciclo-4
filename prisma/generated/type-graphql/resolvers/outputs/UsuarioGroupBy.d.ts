import { UsuarioCountAggregate } from "../outputs/UsuarioCountAggregate";
import { UsuarioMaxAggregate } from "../outputs/UsuarioMaxAggregate";
import { UsuarioMinAggregate } from "../outputs/UsuarioMinAggregate";
export declare class UsuarioGroupBy {
    id: string;
    correo: string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: "Estudiante" | "Administrador" | "Lider";
    estado: "Pendiente" | "Autorizado" | "Desautorizado";
    _count: UsuarioCountAggregate | null;
    _min: UsuarioMinAggregate | null;
    _max: UsuarioMaxAggregate | null;
}
