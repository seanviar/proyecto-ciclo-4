import type { GraphQLResolveInfo } from "graphql";
import { AggregateUsuarioArgs } from "./args/AggregateUsuarioArgs";
import { CreateManyUsuarioArgs } from "./args/CreateManyUsuarioArgs";
import { CreateOneUsuarioArgs } from "./args/CreateOneUsuarioArgs";
import { DeleteManyUsuarioArgs } from "./args/DeleteManyUsuarioArgs";
import { DeleteOneUsuarioArgs } from "./args/DeleteOneUsuarioArgs";
import { FindFirstUsuarioArgs } from "./args/FindFirstUsuarioArgs";
import { FindFirstUsuarioOrThrowArgs } from "./args/FindFirstUsuarioOrThrowArgs";
import { FindManyUsuarioArgs } from "./args/FindManyUsuarioArgs";
import { FindUniqueUsuarioArgs } from "./args/FindUniqueUsuarioArgs";
import { FindUniqueUsuarioOrThrowArgs } from "./args/FindUniqueUsuarioOrThrowArgs";
import { GroupByUsuarioArgs } from "./args/GroupByUsuarioArgs";
import { UpdateManyUsuarioArgs } from "./args/UpdateManyUsuarioArgs";
import { UpdateOneUsuarioArgs } from "./args/UpdateOneUsuarioArgs";
import { UpsertOneUsuarioArgs } from "./args/UpsertOneUsuarioArgs";
import { Usuario } from "../../../models/Usuario";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUsuario } from "../../outputs/AggregateUsuario";
import { UsuarioGroupBy } from "../../outputs/UsuarioGroupBy";
export declare class UsuarioCrudResolver {
    aggregateUsuario(ctx: any, info: GraphQLResolveInfo, args: AggregateUsuarioArgs): Promise<AggregateUsuario>;
    createManyUsuario(ctx: any, info: GraphQLResolveInfo, args: CreateManyUsuarioArgs): Promise<AffectedRowsOutput>;
    createOneUsuario(ctx: any, info: GraphQLResolveInfo, args: CreateOneUsuarioArgs): Promise<Usuario>;
    deleteManyUsuario(ctx: any, info: GraphQLResolveInfo, args: DeleteManyUsuarioArgs): Promise<AffectedRowsOutput>;
    deleteOneUsuario(ctx: any, info: GraphQLResolveInfo, args: DeleteOneUsuarioArgs): Promise<Usuario | null>;
    findFirstUsuario(ctx: any, info: GraphQLResolveInfo, args: FindFirstUsuarioArgs): Promise<Usuario | null>;
    findFirstUsuarioOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstUsuarioOrThrowArgs): Promise<Usuario | null>;
    usuarios(ctx: any, info: GraphQLResolveInfo, args: FindManyUsuarioArgs): Promise<Usuario[]>;
    usuario(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUsuarioArgs): Promise<Usuario | null>;
    getUsuario(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUsuarioOrThrowArgs): Promise<Usuario | null>;
    groupByUsuario(ctx: any, info: GraphQLResolveInfo, args: GroupByUsuarioArgs): Promise<UsuarioGroupBy[]>;
    updateManyUsuario(ctx: any, info: GraphQLResolveInfo, args: UpdateManyUsuarioArgs): Promise<AffectedRowsOutput>;
    updateOneUsuario(ctx: any, info: GraphQLResolveInfo, args: UpdateOneUsuarioArgs): Promise<Usuario | null>;
    upsertOneUsuario(ctx: any, info: GraphQLResolveInfo, args: UpsertOneUsuarioArgs): Promise<Usuario>;
}