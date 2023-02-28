import type { GraphQLResolveInfo } from "graphql";
import { CreateOneUsuarioArgs } from "./args/CreateOneUsuarioArgs";
import { Usuario } from "../../../models/Usuario";
export declare class CreateOneUsuarioResolver {
    createOneUsuario(ctx: any, info: GraphQLResolveInfo, args: CreateOneUsuarioArgs): Promise<Usuario>;
}
