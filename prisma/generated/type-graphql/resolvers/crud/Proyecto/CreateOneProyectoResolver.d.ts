import type { GraphQLResolveInfo } from "graphql";
import { CreateOneProyectoArgs } from "./args/CreateOneProyectoArgs";
import { Proyecto } from "../../../models/Proyecto";
export declare class CreateOneProyectoResolver {
    createOneProyecto(ctx: any, info: GraphQLResolveInfo, args: CreateOneProyectoArgs): Promise<Proyecto>;
}
