import type { GraphQLResolveInfo } from "graphql";
import { Avance } from "../../../models/Avance";
import { Proyecto } from "../../../models/Proyecto";
import { Usuario } from "../../../models/Usuario";
export declare class AvanceRelationsResolver {
    proyecto(avance: Avance, ctx: any, info: GraphQLResolveInfo): Promise<Proyecto>;
    estudiante(avance: Avance, ctx: any, info: GraphQLResolveInfo): Promise<Usuario>;
}
