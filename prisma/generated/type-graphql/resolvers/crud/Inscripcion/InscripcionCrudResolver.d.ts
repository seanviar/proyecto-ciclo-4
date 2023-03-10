import type { GraphQLResolveInfo } from "graphql";
import { AggregateInscripcionArgs } from "./args/AggregateInscripcionArgs";
import { CreateManyInscripcionArgs } from "./args/CreateManyInscripcionArgs";
import { CreateOneInscripcionArgs } from "./args/CreateOneInscripcionArgs";
import { DeleteManyInscripcionArgs } from "./args/DeleteManyInscripcionArgs";
import { DeleteOneInscripcionArgs } from "./args/DeleteOneInscripcionArgs";
import { FindFirstInscripcionArgs } from "./args/FindFirstInscripcionArgs";
import { FindFirstInscripcionOrThrowArgs } from "./args/FindFirstInscripcionOrThrowArgs";
import { FindManyInscripcionArgs } from "./args/FindManyInscripcionArgs";
import { FindUniqueInscripcionArgs } from "./args/FindUniqueInscripcionArgs";
import { FindUniqueInscripcionOrThrowArgs } from "./args/FindUniqueInscripcionOrThrowArgs";
import { GroupByInscripcionArgs } from "./args/GroupByInscripcionArgs";
import { UpdateManyInscripcionArgs } from "./args/UpdateManyInscripcionArgs";
import { UpdateOneInscripcionArgs } from "./args/UpdateOneInscripcionArgs";
import { UpsertOneInscripcionArgs } from "./args/UpsertOneInscripcionArgs";
import { Inscripcion } from "../../../models/Inscripcion";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateInscripcion } from "../../outputs/AggregateInscripcion";
import { InscripcionGroupBy } from "../../outputs/InscripcionGroupBy";
export declare class InscripcionCrudResolver {
    aggregateInscripcion(ctx: any, info: GraphQLResolveInfo, args: AggregateInscripcionArgs): Promise<AggregateInscripcion>;
    createManyInscripcion(ctx: any, info: GraphQLResolveInfo, args: CreateManyInscripcionArgs): Promise<AffectedRowsOutput>;
    createOneInscripcion(ctx: any, info: GraphQLResolveInfo, args: CreateOneInscripcionArgs): Promise<Inscripcion>;
    deleteManyInscripcion(ctx: any, info: GraphQLResolveInfo, args: DeleteManyInscripcionArgs): Promise<AffectedRowsOutput>;
    deleteOneInscripcion(ctx: any, info: GraphQLResolveInfo, args: DeleteOneInscripcionArgs): Promise<Inscripcion | null>;
    findFirstInscripcion(ctx: any, info: GraphQLResolveInfo, args: FindFirstInscripcionArgs): Promise<Inscripcion | null>;
    findFirstInscripcionOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstInscripcionOrThrowArgs): Promise<Inscripcion | null>;
    inscripcions(ctx: any, info: GraphQLResolveInfo, args: FindManyInscripcionArgs): Promise<Inscripcion[]>;
    inscripcion(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInscripcionArgs): Promise<Inscripcion | null>;
    getInscripcion(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInscripcionOrThrowArgs): Promise<Inscripcion | null>;
    groupByInscripcion(ctx: any, info: GraphQLResolveInfo, args: GroupByInscripcionArgs): Promise<InscripcionGroupBy[]>;
    updateManyInscripcion(ctx: any, info: GraphQLResolveInfo, args: UpdateManyInscripcionArgs): Promise<AffectedRowsOutput>;
    updateOneInscripcion(ctx: any, info: GraphQLResolveInfo, args: UpdateOneInscripcionArgs): Promise<Inscripcion | null>;
    upsertOneInscripcion(ctx: any, info: GraphQLResolveInfo, args: UpsertOneInscripcionArgs): Promise<Inscripcion>;
}
