"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneProyectoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneProyectoArgs_1 = require("./args/UpsertOneProyectoArgs");
const Proyecto_1 = require("../../../models/Proyecto");
const helpers_1 = require("../../../helpers");
let UpsertOneProyectoResolver = class UpsertOneProyectoResolver {
    async upsertOneProyecto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Proyecto_1.Proyecto, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneProyectoArgs_1.UpsertOneProyectoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneProyectoResolver.prototype, "upsertOneProyecto", null);
UpsertOneProyectoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Proyecto_1.Proyecto)
], UpsertOneProyectoResolver);
exports.UpsertOneProyectoResolver = UpsertOneProyectoResolver;
