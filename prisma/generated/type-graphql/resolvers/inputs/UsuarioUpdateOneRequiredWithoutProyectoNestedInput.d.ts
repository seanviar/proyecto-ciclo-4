import { UsuarioCreateOrConnectWithoutProyectoInput } from "../inputs/UsuarioCreateOrConnectWithoutProyectoInput";
import { UsuarioCreateWithoutProyectoInput } from "../inputs/UsuarioCreateWithoutProyectoInput";
import { UsuarioUpdateWithoutProyectoInput } from "../inputs/UsuarioUpdateWithoutProyectoInput";
import { UsuarioUpsertWithoutProyectoInput } from "../inputs/UsuarioUpsertWithoutProyectoInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioUpdateOneRequiredWithoutProyectoNestedInput {
    create?: UsuarioCreateWithoutProyectoInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutProyectoInput | undefined;
    upsert?: UsuarioUpsertWithoutProyectoInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
    update?: UsuarioUpdateWithoutProyectoInput | undefined;
}
