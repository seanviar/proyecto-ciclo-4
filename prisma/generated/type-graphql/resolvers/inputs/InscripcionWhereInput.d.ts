import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEnum_Estado_InscripcionFilter } from "../inputs/EnumEnum_Estado_InscripcionFilter";
import { ProyectoRelationFilter } from "../inputs/ProyectoRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UsuarioRelationFilter } from "../inputs/UsuarioRelationFilter";
export declare class InscripcionWhereInput {
    AND?: InscripcionWhereInput[] | undefined;
    OR?: InscripcionWhereInput[] | undefined;
    NOT?: InscripcionWhereInput[] | undefined;
    id?: StringFilter | undefined;
    proyecto?: ProyectoRelationFilter | undefined;
    estudiante?: UsuarioRelationFilter | undefined;
    estado?: EnumEnum_Estado_InscripcionFilter | undefined;
    fechaIngreso?: DateTimeFilter | undefined;
    usuarioId?: StringFilter | undefined;
    proyectoId?: StringFilter | undefined;
}
