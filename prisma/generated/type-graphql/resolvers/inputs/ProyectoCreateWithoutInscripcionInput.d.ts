import { AvanceCreateNestedManyWithoutProyectoInput } from "../inputs/AvanceCreateNestedManyWithoutProyectoInput";
import { UsuarioCreateNestedOneWithoutProyectoInput } from "../inputs/UsuarioCreateNestedOneWithoutProyectoInput";
export declare class ProyectoCreateWithoutInscripcionInput {
    id?: string | undefined;
    nombre: string;
    objetivosGenerales: string;
    objetivosEspesificos: string;
    presupuesto: number;
    fechaInicio?: Date | undefined;
    fechaFin?: Date | undefined;
    lider: UsuarioCreateNestedOneWithoutProyectoInput;
    estado?: "Activo" | "Inactivo" | undefined;
    fase?: "Iniciado" | "En_Desarrollo" | "Terminado" | undefined;
    avance?: AvanceCreateNestedManyWithoutProyectoInput | undefined;
}
