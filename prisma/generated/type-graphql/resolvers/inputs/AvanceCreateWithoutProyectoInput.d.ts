import { UsuarioCreateNestedOneWithoutAvanceInput } from "../inputs/UsuarioCreateNestedOneWithoutAvanceInput";
export declare class AvanceCreateWithoutProyectoInput {
    id?: string | undefined;
    fecha?: Date | undefined;
    descripcion: string;
    observaciones: string;
    estudiante: UsuarioCreateNestedOneWithoutAvanceInput;
}
