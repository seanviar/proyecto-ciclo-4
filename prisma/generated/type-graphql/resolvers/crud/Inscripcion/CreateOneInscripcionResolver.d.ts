import type { GraphQLResolveInfo } from "graphql";
import { CreateOneInscripcionArgs } from "./args/CreateOneInscripcionArgs";
import { Inscripcion } from "../../../models/Inscripcion";
export declare class CreateOneInscripcionResolver {
    createOneInscripcion(ctx: any, info: GraphQLResolveInfo, args: CreateOneInscripcionArgs): Promise<Inscripcion>;
}
