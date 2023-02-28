import type { GraphQLResolveInfo } from "graphql";
import { FindFirstInscripcionOrThrowArgs } from "./args/FindFirstInscripcionOrThrowArgs";
import { Inscripcion } from "../../../models/Inscripcion";
export declare class FindFirstInscripcionOrThrowResolver {
    findFirstInscripcionOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstInscripcionOrThrowArgs): Promise<Inscripcion | null>;
}
