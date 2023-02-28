import { ProyectoCreateNestedOneWithoutAvanceInput } from "../inputs/ProyectoCreateNestedOneWithoutAvanceInput";
import { UsuarioCreateNestedOneWithoutAvanceInput } from "../inputs/UsuarioCreateNestedOneWithoutAvanceInput";
export declare class AvanceCreateInput {
    id?: string | undefined;
    proyecto: ProyectoCreateNestedOneWithoutAvanceInput;
    fecha?: Date | undefined;
    descripcion: string;
    observaciones: string;
    estudiante: UsuarioCreateNestedOneWithoutAvanceInput;
}
