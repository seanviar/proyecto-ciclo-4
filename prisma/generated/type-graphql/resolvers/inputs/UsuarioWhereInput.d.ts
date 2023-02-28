import { AvanceListRelationFilter } from "../inputs/AvanceListRelationFilter";
import { EnumEnum_Estado_UsuarioFilter } from "../inputs/EnumEnum_Estado_UsuarioFilter";
import { EnumEnum_RolFilter } from "../inputs/EnumEnum_RolFilter";
import { InscripcionListRelationFilter } from "../inputs/InscripcionListRelationFilter";
import { ProyectoListRelationFilter } from "../inputs/ProyectoListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class UsuarioWhereInput {
    AND?: UsuarioWhereInput[] | undefined;
    OR?: UsuarioWhereInput[] | undefined;
    NOT?: UsuarioWhereInput[] | undefined;
    id?: StringFilter | undefined;
    correo?: StringFilter | undefined;
    identificacion?: StringFilter | undefined;
    nombre?: StringFilter | undefined;
    apellido?: StringFilter | undefined;
    rol?: EnumEnum_RolFilter | undefined;
    estado?: EnumEnum_Estado_UsuarioFilter | undefined;
    inscripcion?: InscripcionListRelationFilter | undefined;
    proyecto?: ProyectoListRelationFilter | undefined;
    avance?: AvanceListRelationFilter | undefined;
}
