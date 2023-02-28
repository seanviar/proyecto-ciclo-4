import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAvanceOrThrowArgs } from "./args/FindFirstAvanceOrThrowArgs";
import { Avance } from "../../../models/Avance";
export declare class FindFirstAvanceOrThrowResolver {
    findFirstAvanceOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstAvanceOrThrowArgs): Promise<Avance | null>;
}
