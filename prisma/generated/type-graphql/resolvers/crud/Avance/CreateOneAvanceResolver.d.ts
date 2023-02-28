import type { GraphQLResolveInfo } from "graphql";
import { CreateOneAvanceArgs } from "./args/CreateOneAvanceArgs";
import { Avance } from "../../../models/Avance";
export declare class CreateOneAvanceResolver {
    createOneAvance(ctx: any, info: GraphQLResolveInfo, args: CreateOneAvanceArgs): Promise<Avance>;
}
