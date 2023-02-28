import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneAvanceArgs } from "./args/UpsertOneAvanceArgs";
import { Avance } from "../../../models/Avance";
export declare class UpsertOneAvanceResolver {
    upsertOneAvance(ctx: any, info: GraphQLResolveInfo, args: UpsertOneAvanceArgs): Promise<Avance>;
}
