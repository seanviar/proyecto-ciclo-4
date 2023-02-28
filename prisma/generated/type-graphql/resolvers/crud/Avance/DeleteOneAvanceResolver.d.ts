import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneAvanceArgs } from "./args/DeleteOneAvanceArgs";
import { Avance } from "../../../models/Avance";
export declare class DeleteOneAvanceResolver {
    deleteOneAvance(ctx: any, info: GraphQLResolveInfo, args: DeleteOneAvanceArgs): Promise<Avance | null>;
}
