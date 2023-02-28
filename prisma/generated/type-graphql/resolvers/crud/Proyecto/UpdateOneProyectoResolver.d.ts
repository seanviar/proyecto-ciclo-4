import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneProyectoArgs } from "./args/UpdateOneProyectoArgs";
import { Proyecto } from "../../../models/Proyecto";
export declare class UpdateOneProyectoResolver {
    updateOneProyecto(ctx: any, info: GraphQLResolveInfo, args: UpdateOneProyectoArgs): Promise<Proyecto | null>;
}
