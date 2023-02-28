import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneUsuarioArgs } from "./args/DeleteOneUsuarioArgs";
import { Usuario } from "../../../models/Usuario";
export declare class DeleteOneUsuarioResolver {
    deleteOneUsuario(ctx: any, info: GraphQLResolveInfo, args: DeleteOneUsuarioArgs): Promise<Usuario | null>;
}
