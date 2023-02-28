import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumEnum_Estado_ProyectoFilter } from "../inputs/EnumEnum_Estado_ProyectoFilter";
import { EnumEnum_Fase_ProyectoNullableFilter } from "../inputs/EnumEnum_Fase_ProyectoNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ProyectoScalarWhereInput {
    AND?: ProyectoScalarWhereInput[] | undefined;
    OR?: ProyectoScalarWhereInput[] | undefined;
    NOT?: ProyectoScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    nombre?: StringFilter | undefined;
    objetivosGenerales?: StringFilter | undefined;
    objetivosEspesificos?: StringFilter | undefined;
    presupuesto?: FloatFilter | undefined;
    fechaInicio?: DateTimeFilter | undefined;
    fechaFin?: DateTimeNullableFilter | undefined;
    usuarioId?: StringFilter | undefined;
    estado?: EnumEnum_Estado_ProyectoFilter | undefined;
    fase?: EnumEnum_Fase_ProyectoNullableFilter | undefined;
}
