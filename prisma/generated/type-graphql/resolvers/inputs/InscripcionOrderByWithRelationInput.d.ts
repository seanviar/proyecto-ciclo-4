import { ProyectoOrderByWithRelationInput } from "../inputs/ProyectoOrderByWithRelationInput";
import { UsuarioOrderByWithRelationInput } from "../inputs/UsuarioOrderByWithRelationInput";
export declare class InscripcionOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    proyecto?: ProyectoOrderByWithRelationInput | undefined;
    estudiante?: UsuarioOrderByWithRelationInput | undefined;
    estado?: "asc" | "desc" | undefined;
    fechaIngreso?: "asc" | "desc" | undefined;
    usuarioId?: "asc" | "desc" | undefined;
    proyectoId?: "asc" | "desc" | undefined;
}
