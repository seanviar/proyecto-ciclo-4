import { UsuarioCreateOrConnectWithoutInscripcionInput } from "../inputs/UsuarioCreateOrConnectWithoutInscripcionInput";
import { UsuarioCreateWithoutInscripcionInput } from "../inputs/UsuarioCreateWithoutInscripcionInput";
import { UsuarioUpdateWithoutInscripcionInput } from "../inputs/UsuarioUpdateWithoutInscripcionInput";
import { UsuarioUpsertWithoutInscripcionInput } from "../inputs/UsuarioUpsertWithoutInscripcionInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioUpdateOneRequiredWithoutInscripcionNestedInput {
    create?: UsuarioCreateWithoutInscripcionInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutInscripcionInput | undefined;
    upsert?: UsuarioUpsertWithoutInscripcionInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
    update?: UsuarioUpdateWithoutInscripcionInput | undefined;
}
