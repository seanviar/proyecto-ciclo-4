import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProyectoRelationFilter } from "../inputs/ProyectoRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UsuarioRelationFilter } from "../inputs/UsuarioRelationFilter";
export declare class AvanceWhereInput {
    AND?: AvanceWhereInput[] | undefined;
    OR?: AvanceWhereInput[] | undefined;
    NOT?: AvanceWhereInput[] | undefined;
    id?: StringFilter | undefined;
    proyecto?: ProyectoRelationFilter | undefined;
    proyectoId?: StringFilter | undefined;
    fecha?: DateTimeFilter | undefined;
    descripcion?: StringFilter | undefined;
    observaciones?: StringFilter | undefined;
    estudiante?: UsuarioRelationFilter | undefined;
    usuarioId?: StringFilter | undefined;
}
