import type { GraphQLResolveInfo } from "graphql";
import { Avance } from "../../../models/Avance";
import { Inscripcion } from "../../../models/Inscripcion";
import { Proyecto } from "../../../models/Proyecto";
import { Usuario } from "../../../models/Usuario";
import { UsuarioAvanceArgs } from "./args/UsuarioAvanceArgs";
import { UsuarioInscripcionArgs } from "./args/UsuarioInscripcionArgs";
import { UsuarioProyectoArgs } from "./args/UsuarioProyectoArgs";
export declare class UsuarioRelationsResolver {
    inscripcion(usuario: Usuario, ctx: any, info: GraphQLResolveInfo, args: UsuarioInscripcionArgs): Promise<Inscripcion[]>;
    proyecto(usuario: Usuario, ctx: any, info: GraphQLResolveInfo, args: UsuarioProyectoArgs): Promise<Proyecto[]>;
    avance(usuario: Usuario, ctx: any, info: GraphQLResolveInfo, args: UsuarioAvanceArgs): Promise<Avance[]>;
}
