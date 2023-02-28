import { UsuarioCreateOrConnectWithoutAvanceInput } from "../inputs/UsuarioCreateOrConnectWithoutAvanceInput";
import { UsuarioCreateWithoutAvanceInput } from "../inputs/UsuarioCreateWithoutAvanceInput";
import { UsuarioUpdateWithoutAvanceInput } from "../inputs/UsuarioUpdateWithoutAvanceInput";
import { UsuarioUpsertWithoutAvanceInput } from "../inputs/UsuarioUpsertWithoutAvanceInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioUpdateOneRequiredWithoutAvanceNestedInput {
    create?: UsuarioCreateWithoutAvanceInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvanceInput | undefined;
    upsert?: UsuarioUpsertWithoutAvanceInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
    update?: UsuarioUpdateWithoutAvanceInput | undefined;
}
