import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneInscripcionArgs } from "./args/UpdateOneInscripcionArgs";
import { Inscripcion } from "../../../models/Inscripcion";
export declare class UpdateOneInscripcionResolver {
    updateOneInscripcion(ctx: any, info: GraphQLResolveInfo, args: UpdateOneInscripcionArgs): Promise<Inscripcion | null>;
}
