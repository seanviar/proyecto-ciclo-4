import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneUsuarioArgs } from "./args/UpdateOneUsuarioArgs";
import { Usuario } from "../../../models/Usuario";
export declare class UpdateOneUsuarioResolver {
    updateOneUsuario(ctx: any, info: GraphQLResolveInfo, args: UpdateOneUsuarioArgs): Promise<Usuario | null>;
}
