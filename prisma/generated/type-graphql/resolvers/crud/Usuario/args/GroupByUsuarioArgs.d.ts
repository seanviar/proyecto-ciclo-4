import { UsuarioOrderByWithAggregationInput } from "../../../inputs/UsuarioOrderByWithAggregationInput";
import { UsuarioScalarWhereWithAggregatesInput } from "../../../inputs/UsuarioScalarWhereWithAggregatesInput";
import { UsuarioWhereInput } from "../../../inputs/UsuarioWhereInput";
export declare class GroupByUsuarioArgs {
    where?: UsuarioWhereInput | undefined;
    orderBy?: UsuarioOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "correo" | "identificacion" | "nombre" | "apellido" | "rol" | "estado">;
    having?: UsuarioScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
