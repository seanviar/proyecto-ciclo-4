import { EnumEnum_Estado_UsuarioWithAggregatesFilter } from "../inputs/EnumEnum_Estado_UsuarioWithAggregatesFilter";
import { EnumEnum_RolWithAggregatesFilter } from "../inputs/EnumEnum_RolWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UsuarioScalarWhereWithAggregatesInput {
    AND?: UsuarioScalarWhereWithAggregatesInput[] | undefined;
    OR?: UsuarioScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UsuarioScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    correo?: StringWithAggregatesFilter | undefined;
    identificacion?: StringWithAggregatesFilter | undefined;
    nombre?: StringWithAggregatesFilter | undefined;
    apellido?: StringWithAggregatesFilter | undefined;
    rol?: EnumEnum_RolWithAggregatesFilter | undefined;
    estado?: EnumEnum_Estado_UsuarioWithAggregatesFilter | undefined;
}
