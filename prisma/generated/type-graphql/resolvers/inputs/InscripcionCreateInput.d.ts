import { ProyectoCreateNestedOneWithoutInscripcionInput } from "../inputs/ProyectoCreateNestedOneWithoutInscripcionInput";
import { UsuarioCreateNestedOneWithoutInscripcionInput } from "../inputs/UsuarioCreateNestedOneWithoutInscripcionInput";
export declare class InscripcionCreateInput {
    id?: string | undefined;
    proyecto: ProyectoCreateNestedOneWithoutInscripcionInput;
    estudiante: UsuarioCreateNestedOneWithoutInscripcionInput;
    estado?: "Acepdado" | "Rechazado" | "Pendiente" | undefined;
    fechaIngreso?: Date | undefined;
}
