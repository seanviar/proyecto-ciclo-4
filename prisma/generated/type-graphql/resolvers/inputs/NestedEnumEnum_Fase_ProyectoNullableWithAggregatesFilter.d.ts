import { NestedEnumEnum_Fase_ProyectoNullableFilter } from "../inputs/NestedEnumEnum_Fase_ProyectoNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter {
    equals?: "Iniciado" | "En_Desarrollo" | "Terminado" | undefined;
    in?: Array<"Iniciado" | "En_Desarrollo" | "Terminado"> | undefined;
    notIn?: Array<"Iniciado" | "En_Desarrollo" | "Terminado"> | undefined;
    not?: NestedEnumEnum_Fase_ProyectoNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumEnum_Fase_ProyectoNullableFilter | undefined;
    _max?: NestedEnumEnum_Fase_ProyectoNullableFilter | undefined;
}
