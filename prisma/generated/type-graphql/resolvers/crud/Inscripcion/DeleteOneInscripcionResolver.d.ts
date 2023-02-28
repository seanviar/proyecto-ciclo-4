import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneInscripcionArgs } from "./args/DeleteOneInscripcionArgs";
import { Inscripcion } from "../../../models/Inscripcion";
export declare class DeleteOneInscripcionResolver {
    deleteOneInscripcion(ctx: any, info: GraphQLResolveInfo, args: DeleteOneInscripcionArgs): Promise<Inscripcion | null>;
}
