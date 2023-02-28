import { UsuarioCreateOrConnectWithoutInscripcionInput } from "../inputs/UsuarioCreateOrConnectWithoutInscripcionInput";
import { UsuarioCreateWithoutInscripcionInput } from "../inputs/UsuarioCreateWithoutInscripcionInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioCreateNestedOneWithoutInscripcionInput {
    create?: UsuarioCreateWithoutInscripcionInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutInscripcionInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
}
