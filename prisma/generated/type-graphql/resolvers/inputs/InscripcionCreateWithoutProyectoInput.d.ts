import { UsuarioCreateNestedOneWithoutInscripcionInput } from "../inputs/UsuarioCreateNestedOneWithoutInscripcionInput";
export declare class InscripcionCreateWithoutProyectoInput {
    id?: string | undefined;
    estudiante: UsuarioCreateNestedOneWithoutInscripcionInput;
    estado?: "Acepdado" | "Rechazado" | "Pendiente" | undefined;
    fechaIngreso?: Date | undefined;
}
