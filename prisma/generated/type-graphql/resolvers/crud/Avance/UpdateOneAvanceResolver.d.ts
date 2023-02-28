import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneAvanceArgs } from "./args/UpdateOneAvanceArgs";
import { Avance } from "../../../models/Avance";
export declare class UpdateOneAvanceResolver {
    updateOneAvance(ctx: any, info: GraphQLResolveInfo, args: UpdateOneAvanceArgs): Promise<Avance | null>;
}
