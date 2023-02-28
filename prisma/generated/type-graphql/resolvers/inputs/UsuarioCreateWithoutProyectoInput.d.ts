import { AvanceCreateNestedManyWithoutEstudianteInput } from "../inputs/AvanceCreateNestedManyWithoutEstudianteInput";
import { InscripcionCreateNestedManyWithoutEstudianteInput } from "../inputs/InscripcionCreateNestedManyWithoutEstudianteInput";
export declare class UsuarioCreateWithoutProyectoInput {
    id?: string | undefined;
    correo: string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: "Estudiante" | "Administrador" | "Lider";
    estado?: "Pendiente" | "Autorizado" | "Desautorizado" | undefined;
    inscripcion?: InscripcionCreateNestedManyWithoutEstudianteInput | undefined;
    avance?: AvanceCreateNestedManyWithoutEstudianteInput | undefined;
}
