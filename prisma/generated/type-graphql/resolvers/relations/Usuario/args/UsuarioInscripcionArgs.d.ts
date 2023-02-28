import { InscripcionOrderByWithRelationInput } from "../../../inputs/InscripcionOrderByWithRelationInput";
import { InscripcionWhereInput } from "../../../inputs/InscripcionWhereInput";
import { InscripcionWhereUniqueInput } from "../../../inputs/InscripcionWhereUniqueInput";
export declare class UsuarioInscripcionArgs {
    where?: InscripcionWhereInput | undefined;
    orderBy?: InscripcionOrderByWithRelationInput[] | undefined;
    cursor?: InscripcionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "estado" | "fechaIngreso" | "usuarioId" | "proyectoId"> | undefined;
}
