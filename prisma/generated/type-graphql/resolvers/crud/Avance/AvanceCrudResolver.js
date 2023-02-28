"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateAvanceArgs_1 = require("./args/AggregateAvanceArgs");
const CreateManyAvanceArgs_1 = require("./args/CreateManyAvanceArgs");
const CreateOneAvanceArgs_1 = require("./args/CreateOneAvanceArgs");
const DeleteManyAvanceArgs_1 = require("./args/DeleteManyAvanceArgs");
const DeleteOneAvanceArgs_1 = require("./args/DeleteOneAvanceArgs");
const FindFirstAvanceArgs_1 = require("./args/FindFirstAvanceArgs");
const FindFirstAvanceOrThrowArgs_1 = require("./args/FindFirstAvanceOrThrowArgs");
const FindManyAvanceArgs_1 = require("./args/FindManyAvanceArgs");
const FindUniqueAvanceArgs_1 = require("./args/FindUniqueAvanceArgs");
const FindUniqueAvanceOrThrowArgs_1 = require("./args/FindUniqueAvanceOrThrowArgs");
const GroupByAvanceArgs_1 = require("./args/GroupByAvanceArgs");
const UpdateManyAvanceArgs_1 = require("./args/UpdateManyAvanceArgs");
const UpdateOneAvanceArgs_1 = require("./args/UpdateOneAvanceArgs");
const UpsertOneAvanceArgs_1 = require("./args/UpsertOneAvanceArgs");
const helpers_1 = require("../../../helpers");
const Avance_1 = require("../../../models/Avance");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAvance_1 = require("../../outputs/AggregateAvance");
const AvanceGroupBy_1 = require("../../outputs/AvanceGroupBy");
let AvanceCrudResolver = class AvanceCrudResolver {
    async aggregateAvance(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAvanceOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async avances(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async avance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByAvance(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAvance_1.AggregateAvance, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAvanceArgs_1.AggregateAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvanceCrudResolver.prototype, "aggregateAvance", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAvanceArgs_1.CreateManyAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvanceCrudResolver.prototype, "createManyAvance", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Avance_1.Avance, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneAvanceArgs_1.CreateOneAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvanceCrudResolver.prototype, "createOneAvance", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAvanceArgs_1.DeleteManyAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvanceCrudResolver.prototype, "deleteManyAvance", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Avance_1.Avance, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneAvanceArgs_1.DeleteOneAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvanceCrudResolver.prototype, "deleteOneAvance", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Avance_1.Avance, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAvanceArgs_1.FindFirstAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvanceCrudResolver.prototype, "findFirstAvance", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Avance_1.Avance, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAvanceOrThrowArgs_1.FindFirstAvanceOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvanceCrudResolver.prototype, "findFirstAvanceOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Avance_1.Avance], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAvanceArgs_1.FindManyAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvanceCrudResolver.prototype, "avances", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Avance_1.Avance, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAvanceArgs_1.FindUniqueAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvanceCrudResolver.prototype, "avance", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Avance_1.Avance, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAvanceOrThrowArgs_1.FindUniqueAvanceOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvanceCrudResolver.prototype, "getAvance", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AvanceGroupBy_1.AvanceGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAvanceArgs_1.GroupByAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvanceCrudResolver.prototype, "groupByAvance", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAvanceArgs_1.UpdateManyAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvanceCrudResolver.prototype, "updateManyAvance", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Avance_1.Avance, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneAvanceArgs_1.UpdateOneAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvanceCrudResolver.prototype, "updateOneAvance", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Avance_1.Avance, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneAvanceArgs_1.UpsertOneAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AvanceCrudResolver.prototype, "upsertOneAvance", null);
AvanceCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], AvanceCrudResolver);
exports.AvanceCrudResolver = AvanceCrudResolver;
