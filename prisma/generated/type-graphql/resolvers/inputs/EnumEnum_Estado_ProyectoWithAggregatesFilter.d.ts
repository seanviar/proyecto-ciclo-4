import { NestedEnumEnum_Estado_ProyectoFilter } from "../inputs/NestedEnumEnum_Estado_ProyectoFilter";
import { NestedEnumEnum_Estado_ProyectoWithAggregatesFilter } from "../inputs/NestedEnumEnum_Estado_ProyectoWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumEnum_Estado_ProyectoWithAggregatesFilter {
    equals?: "Activo" | "Inactivo" | undefined;
    in?: Array<"Activo" | "Inactivo"> | undefined;
    notIn?: Array<"Activo" | "Inactivo"> | undefined;
    not?: NestedEnumEnum_Estado_ProyectoWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_Estado_ProyectoFilter | undefined;
    _max?: NestedEnumEnum_Estado_ProyectoFilter | undefined;
}
