import { ProyectoCreateNestedOneWithoutInscripcionInput } from "../inputs/ProyectoCreateNestedOneWithoutInscripcionInput";
export declare class InscripcionCreateWithoutEstudianteInput {
    id?: string | undefined;
    proyecto: ProyectoCreateNestedOneWithoutInscripcionInput;
    estado?: "Acepdado" | "Rechazado" | "Pendiente" | undefined;
    fechaIngreso?: Date | undefined;
}
