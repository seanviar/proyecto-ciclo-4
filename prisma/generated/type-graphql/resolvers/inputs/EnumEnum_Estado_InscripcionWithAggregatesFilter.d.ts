import { NestedEnumEnum_Estado_InscripcionFilter } from "../inputs/NestedEnumEnum_Estado_InscripcionFilter";
import { NestedEnumEnum_Estado_InscripcionWithAggregatesFilter } from "../inputs/NestedEnumEnum_Estado_InscripcionWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumEnum_Estado_InscripcionWithAggregatesFilter {
    equals?: "Acepdado" | "Rechazado" | "Pendiente" | undefined;
    in?: Array<"Acepdado" | "Rechazado" | "Pendiente"> | undefined;
    notIn?: Array<"Acepdado" | "Rechazado" | "Pendiente"> | undefined;
    not?: NestedEnumEnum_Estado_InscripcionWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumEnum_Estado_InscripcionFilter | undefined;
    _max?: NestedEnumEnum_Estado_InscripcionFilter | undefined;
}
