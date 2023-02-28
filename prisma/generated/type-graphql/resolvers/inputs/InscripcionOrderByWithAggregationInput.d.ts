import { InscripcionCountOrderByAggregateInput } from "../inputs/InscripcionCountOrderByAggregateInput";
import { InscripcionMaxOrderByAggregateInput } from "../inputs/InscripcionMaxOrderByAggregateInput";
import { InscripcionMinOrderByAggregateInput } from "../inputs/InscripcionMinOrderByAggregateInput";
export declare class InscripcionOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    estado?: "asc" | "desc" | undefined;
    fechaIngreso?: "asc" | "desc" | undefined;
    usuarioId?: "asc" | "desc" | undefined;
    proyectoId?: "asc" | "desc" | undefined;
    _count?: InscripcionCountOrderByAggregateInput | undefined;
    _max?: InscripcionMaxOrderByAggregateInput | undefined;
    _min?: InscripcionMinOrderByAggregateInput | undefined;
}
