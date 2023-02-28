import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEnum_Estado_InscripcionFilter } from "../inputs/EnumEnum_Estado_InscripcionFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class InscripcionScalarWhereInput {
    AND?: InscripcionScalarWhereInput[] | undefined;
    OR?: InscripcionScalarWhereInput[] | undefined;
    NOT?: InscripcionScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    estado?: EnumEnum_Estado_InscripcionFilter | undefined;
    fechaIngreso?: DateTimeFilter | undefined;
    usuarioId?: StringFilter | undefined;
    proyectoId?: StringFilter | undefined;
}
