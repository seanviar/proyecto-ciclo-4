import { AvanceOrderByRelationAggregateInput } from "../inputs/AvanceOrderByRelationAggregateInput";
import { InscripcionOrderByRelationAggregateInput } from "../inputs/InscripcionOrderByRelationAggregateInput";
import { ProyectoOrderByRelationAggregateInput } from "../inputs/ProyectoOrderByRelationAggregateInput";
export declare class UsuarioOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    correo?: "asc" | "desc" | undefined;
    identificacion?: "asc" | "desc" | undefined;
    nombre?: "asc" | "desc" | undefined;
    apellido?: "asc" | "desc" | undefined;
    rol?: "asc" | "desc" | undefined;
    estado?: "asc" | "desc" | undefined;
    inscripcion?: InscripcionOrderByRelationAggregateInput | undefined;
    proyecto?: ProyectoOrderByRelationAggregateInput | undefined;
    avance?: AvanceOrderByRelationAggregateInput | undefined;
}
