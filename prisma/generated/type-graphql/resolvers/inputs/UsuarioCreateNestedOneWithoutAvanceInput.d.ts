import { UsuarioCreateOrConnectWithoutAvanceInput } from "../inputs/UsuarioCreateOrConnectWithoutAvanceInput";
import { UsuarioCreateWithoutAvanceInput } from "../inputs/UsuarioCreateWithoutAvanceInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioCreateNestedOneWithoutAvanceInput {
    create?: UsuarioCreateWithoutAvanceInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvanceInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
}
