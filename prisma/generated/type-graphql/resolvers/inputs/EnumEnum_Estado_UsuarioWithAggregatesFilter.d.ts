import { NestedEnumEnum_Estado_UsuarioFilter } from "../inputs/NestedEnumEnum_Estado_UsuarioFilter";
import { NestedEnumEnum_Estado_UsuarioWithAggregatesFilter } from "../inputs/NestedEnumEnum_Estado_UsuarioWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumEnum_Estado_UsuarioWithAggregatesFilter {
    equals?: "Pendiente" | "Autorizado" | "Desautorizado" | undefined;
    in?: Array<"Pendiente" | "Autorizado" | "Desautorizado"> | undefined;
    notIn?: Array<"Pendiente" | "Autorizado" | "Desautorizado"> | undefined;
    not?: NestedEnumEnum_Estado_UsuarioWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_Estado_UsuarioFilter | undefined;
    _max?: NestedEnumEnum_Estado_UsuarioFilter | undefined;
}
