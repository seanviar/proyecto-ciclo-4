import { AvanceListRelationFilter } from "../inputs/AvanceListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumEnum_Estado_ProyectoFilter } from "../inputs/EnumEnum_Estado_ProyectoFilter";
import { EnumEnum_Fase_ProyectoNullableFilter } from "../inputs/EnumEnum_Fase_ProyectoNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { InscripcionListRelationFilter } from "../inputs/InscripcionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UsuarioRelationFilter } from "../inputs/UsuarioRelationFilter";
export declare class ProyectoWhereInput {
    AND?: ProyectoWhereInput[] | undefined;
    OR?: ProyectoWhereInput[] | undefined;
    NOT?: ProyectoWhereInput[] | undefined;
    id?: StringFilter | undefined;
    nombre?: StringFilter | undefined;
    objetivosGenerales?: StringFilter | undefined;
    objetivosEspesificos?: StringFilter | undefined;
    presupuesto?: FloatFilter | undefined;
    fechaInicio?: DateTimeFilter | undefined;
    fechaFin?: DateTimeNullableFilter | undefined;
    lider?: UsuarioRelationFilter | undefined;
    usuarioId?: StringFilter | undefined;
    estado?: EnumEnum_Estado_ProyectoFilter | undefined;
    fase?: EnumEnum_Fase_ProyectoNullableFilter | undefined;
    avance?: AvanceListRelationFilter | undefined;
    inscripcion?: InscripcionListRelationFilter | undefined;
}
