import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAvanceOrThrowArgs } from "./args/FindUniqueAvanceOrThrowArgs";
import { Avance } from "../../../models/Avance";
export declare class FindUniqueAvanceOrThrowResolver {
    getAvance(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAvanceOrThrowArgs): Promise<Avance | null>;
}
