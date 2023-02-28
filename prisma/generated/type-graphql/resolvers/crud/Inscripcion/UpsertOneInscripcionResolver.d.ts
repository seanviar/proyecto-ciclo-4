import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneInscripcionArgs } from "./args/UpsertOneInscripcionArgs";
import { Inscripcion } from "../../../models/Inscripcion";
export declare class UpsertOneInscripcionResolver {
    upsertOneInscripcion(ctx: any, info: GraphQLResolveInfo, args: UpsertOneInscripcionArgs): Promise<Inscripcion>;
}
