import { UsuarioCreateOrConnectWithoutProyectoInput } from "../inputs/UsuarioCreateOrConnectWithoutProyectoInput";
import { UsuarioCreateWithoutProyectoInput } from "../inputs/UsuarioCreateWithoutProyectoInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioCreateNestedOneWithoutProyectoInput {
    create?: UsuarioCreateWithoutProyectoInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutProyectoInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
}
