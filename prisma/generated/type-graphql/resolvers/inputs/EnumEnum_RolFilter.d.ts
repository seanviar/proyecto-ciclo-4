import { NestedEnumEnum_RolFilter } from "../inputs/NestedEnumEnum_RolFilter";
export declare class EnumEnum_RolFilter {
    equals?: "Estudiante" | "Administrador" | "Lider" | undefined;
    in?: Array<"Estudiante" | "Administrador" | "Lider"> | undefined;
    notIn?: Array<"Estudiante" | "Administrador" | "Lider"> | undefined;
    not?: NestedEnumEnum_RolFilter | undefined;
}
