import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUsuarioOrThrowArgs } from "./args/FindFirstUsuarioOrThrowArgs";
import { Usuario } from "../../../models/Usuario";
export declare class FindFirstUsuarioOrThrowResolver {
    findFirstUsuarioOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstUsuarioOrThrowArgs): Promise<Usuario | null>;
}
