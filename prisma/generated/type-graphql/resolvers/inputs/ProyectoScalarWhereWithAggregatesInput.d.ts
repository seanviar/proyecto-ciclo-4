import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumEnum_Estado_ProyectoWithAggregatesFilter } from "../inputs/EnumEnum_Estado_ProyectoWithAggregatesFilter";
import { EnumEnum_Fase_ProyectoNullableWithAggregatesFilter } from "../inputs/EnumEnum_Fase_ProyectoNullableWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProyectoScalarWhereWithAggregatesInput {
    AND?: ProyectoScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProyectoScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProyectoScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    nombre?: StringWithAggregatesFilter | undefined;
    objetivosGenerales?: StringWithAggregatesFilter | undefined;
    objetivosEspesificos?: StringWithAggregatesFilter | undefined;
    presupuesto?: FloatWithAggregatesFilter | undefined;
    fechaInicio?: DateTimeWithAggregatesFilter | undefined;
    fechaFin?: DateTimeNullableWithAggregatesFilter | undefined;
    usuarioId?: StringWithAggregatesFilter | undefined;
    estado?: EnumEnum_Estado_ProyectoWithAggregatesFilter | undefined;
    fase?: EnumEnum_Fase_ProyectoNullableWithAggregatesFilter | undefined;
}
