import type { GraphQLResolveInfo } from "graphql";
import { FindFirstProyectoOrThrowArgs } from "./args/FindFirstProyectoOrThrowArgs";
import { Proyecto } from "../../../models/Proyecto";
export declare class FindFirstProyectoOrThrowResolver {
    findFirstProyectoOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstProyectoOrThrowArgs): Promise<Proyecto | null>;
}
