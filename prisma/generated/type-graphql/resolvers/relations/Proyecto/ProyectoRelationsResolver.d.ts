import type { GraphQLResolveInfo } from "graphql";
import { Avance } from "../../../models/Avance";
import { Inscripcion } from "../../../models/Inscripcion";
import { Proyecto } from "../../../models/Proyecto";
import { Usuario } from "../../../models/Usuario";
import { ProyectoAvanceArgs } from "./args/ProyectoAvanceArgs";
import { ProyectoInscripcionArgs } from "./args/ProyectoInscripcionArgs";
export declare class ProyectoRelationsResolver {
    lider(proyecto: Proyecto, ctx: any, info: GraphQLResolveInfo): Promise<Usuario>;
    avance(proyecto: Proyecto, ctx: any, info: GraphQLResolveInfo, args: ProyectoAvanceArgs): Promise<Avance[]>;
    inscripcion(proyecto: Proyecto, ctx: any, info: GraphQLResolveInfo, args: ProyectoInscripcionArgs): Promise<Inscripcion[]>;
}
