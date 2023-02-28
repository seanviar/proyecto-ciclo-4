import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueInscripcionOrThrowArgs } from "./args/FindUniqueInscripcionOrThrowArgs";
import { Inscripcion } from "../../../models/Inscripcion";
export declare class FindUniqueInscripcionOrThrowResolver {
    getInscripcion(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInscripcionOrThrowArgs): Promise<Inscripcion | null>;
}
