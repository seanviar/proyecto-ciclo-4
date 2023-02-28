import { NestedEnumEnum_RolFilter } from "../inputs/NestedEnumEnum_RolFilter";
import { NestedEnumEnum_RolWithAggregatesFilter } from "../inputs/NestedEnumEnum_RolWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumEnum_RolWithAggregatesFilter {
    equals?: "Estudiante" | "Administrador" | "Lider" | undefined;
    in?: Array<"Estudiante" | "Administrador" | "Lider"> | undefined;
    notIn?: Array<"Estudiante" | "Administrador" | "Lider"> | undefined;
    not?: NestedEnumEnum_RolWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_RolFilter | undefined;
    _max?: NestedEnumEnum_RolFilter | undefined;
}
