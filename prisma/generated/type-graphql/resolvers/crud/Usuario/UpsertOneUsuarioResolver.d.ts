import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneUsuarioArgs } from "./args/UpsertOneUsuarioArgs";
import { Usuario } from "../../../models/Usuario";
export declare class UpsertOneUsuarioResolver {
    upsertOneUsuario(ctx: any, info: GraphQLResolveInfo, args: UpsertOneUsuarioArgs): Promise<Usuario>;
}
