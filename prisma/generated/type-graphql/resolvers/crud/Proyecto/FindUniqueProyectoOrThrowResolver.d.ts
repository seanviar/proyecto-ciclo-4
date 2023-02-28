import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueProyectoOrThrowArgs } from "./args/FindUniqueProyectoOrThrowArgs";
import { Proyecto } from "../../../models/Proyecto";
export declare class FindUniqueProyectoOrThrowResolver {
    getProyecto(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProyectoOrThrowArgs): Promise<Proyecto | null>;
}
