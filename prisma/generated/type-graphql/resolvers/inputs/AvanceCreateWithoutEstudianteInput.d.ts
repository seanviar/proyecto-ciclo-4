import { ProyectoCreateNestedOneWithoutAvanceInput } from "../inputs/ProyectoCreateNestedOneWithoutAvanceInput";
export declare class AvanceCreateWithoutEstudianteInput {
    id?: string | undefined;
    proyecto: ProyectoCreateNestedOneWithoutAvanceInput;
    fecha?: Date | undefined;
    descripcion: string;
    observaciones: string;
}
