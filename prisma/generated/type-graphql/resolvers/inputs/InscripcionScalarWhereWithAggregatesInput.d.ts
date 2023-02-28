import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumEnum_Estado_InscripcionWithAggregatesFilter } from "../inputs/EnumEnum_Estado_InscripcionWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class InscripcionScalarWhereWithAggregatesInput {
    AND?: InscripcionScalarWhereWithAggregatesInput[] | undefined;
    OR?: InscripcionScalarWhereWithAggregatesInput[] | undefined;
    NOT?: InscripcionScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    estado?: EnumEnum_Estado_InscripcionWithAggregatesFilter | undefined;
    fechaIngreso?: DateTimeWithAggregatesFilter | undefined;
    usuarioId?: StringWithAggregatesFilter | undefined;
    proyectoId?: StringWithAggregatesFilter | undefined;
}
