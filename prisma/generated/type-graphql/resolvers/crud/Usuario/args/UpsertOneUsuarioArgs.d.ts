import { UsuarioCreateInput } from "../../../inputs/UsuarioCreateInput";
import { UsuarioUpdateInput } from "../../../inputs/UsuarioUpdateInput";
import { UsuarioWhereUniqueInput } from "../../../inputs/UsuarioWhereUniqueInput";
export declare class UpsertOneUsuarioArgs {
    where: UsuarioWhereUniqueInput;
    create: UsuarioCreateInput;
    update: UsuarioUpdateInput;
}
