import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneProyectoArgs } from "./args/UpsertOneProyectoArgs";
import { Proyecto } from "../../../models/Proyecto";
export declare class UpsertOneProyectoResolver {
    upsertOneProyecto(ctx: any, info: GraphQLResolveInfo, args: UpsertOneProyectoArgs): Promise<Proyecto>;
}
