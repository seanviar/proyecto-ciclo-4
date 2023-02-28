import { AvanceCreateNestedManyWithoutEstudianteInput } from "../inputs/AvanceCreateNestedManyWithoutEstudianteInput";
import { InscripcionCreateNestedManyWithoutEstudianteInput } from "../inputs/InscripcionCreateNestedManyWithoutEstudianteInput";
import { ProyectoCreateNestedManyWithoutLiderInput } from "../inputs/ProyectoCreateNestedManyWithoutLiderInput";
export declare class UsuarioCreateInput {
    id?: string | undefined;
    correo: string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: "Estudiante" | "Administrador" | "Lider";
    estado?: "Pendiente" | "Autorizado" | "Desautorizado" | undefined;
    inscripcion?: InscripcionCreateNestedManyWithoutEstudianteInput | undefined;
    proyecto?: ProyectoCreateNestedManyWithoutLiderInput | undefined;
    avance?: AvanceCreateNestedManyWithoutEstudianteInput | undefined;
}
