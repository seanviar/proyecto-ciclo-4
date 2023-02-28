import { AvanceCountAggregate } from "../outputs/AvanceCountAggregate";
import { AvanceMaxAggregate } from "../outputs/AvanceMaxAggregate";
import { AvanceMinAggregate } from "../outputs/AvanceMinAggregate";
export declare class AvanceGroupBy {
    id: string;
    proyectoId: string;
    fecha: Date;
    descripcion: string;
    observaciones: string;
    usuarioId: string;
    _count: AvanceCountAggregate | null;
    _min: AvanceMinAggregate | null;
    _max: AvanceMaxAggregate | null;
}
