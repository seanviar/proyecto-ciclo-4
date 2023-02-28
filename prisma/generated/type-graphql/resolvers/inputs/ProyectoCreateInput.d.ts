import { AvanceCreateNestedManyWithoutProyectoInput } from "../inputs/AvanceCreateNestedManyWithoutProyectoInput";
import { InscripcionCreateNestedManyWithoutProyectoInput } from "../inputs/InscripcionCreateNestedManyWithoutProyectoInput";
import { UsuarioCreateNestedOneWithoutProyectoInput } from "../inputs/UsuarioCreateNestedOneWithoutProyectoInput";
export declare class ProyectoCreateInput {
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
    inscripcion?: InscripcionCreateNestedManyWithoutProyectoInput | undefined;
}
