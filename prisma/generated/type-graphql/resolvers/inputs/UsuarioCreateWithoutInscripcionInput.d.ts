import { AvanceCreateNestedManyWithoutEstudianteInput } from "../inputs/AvanceCreateNestedManyWithoutEstudianteInput";
import { ProyectoCreateNestedManyWithoutLiderInput } from "../inputs/ProyectoCreateNestedManyWithoutLiderInput";
export declare class UsuarioCreateWithoutInscripcionInput {
    id?: string | undefined;
    correo: string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: "Estudiante" | "Administrador" | "Lider";
    estado?: "Pendiente" | "Autorizado" | "Desautorizado" | undefined;
    proyecto?: ProyectoCreateNestedManyWithoutLiderInput | undefined;
    avance?: AvanceCreateNestedManyWithoutEstudianteInput | undefined;
}
