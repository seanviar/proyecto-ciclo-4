import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUsuarioOrThrowArgs } from "./args/FindUniqueUsuarioOrThrowArgs";
import { Usuario } from "../../../models/Usuario";
export declare class FindUniqueUsuarioOrThrowResolver {
    getUsuario(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUsuarioOrThrowArgs): Promise<Usuario | null>;
}
