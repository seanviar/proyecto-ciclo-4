import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneProyectoArgs } from "./args/DeleteOneProyectoArgs";
import { Proyecto } from "../../../models/Proyecto";
export declare class DeleteOneProyectoResolver {
    deleteOneProyecto(ctx: any, info: GraphQLResolveInfo, args: DeleteOneProyectoArgs): Promise<Proyecto | null>;
}
