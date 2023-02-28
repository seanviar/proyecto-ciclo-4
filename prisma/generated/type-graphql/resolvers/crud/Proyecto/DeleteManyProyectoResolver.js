"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProyectoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyProyectoArgs_1 = require("./args/DeleteManyProyectoArgs");
const Proyecto_1 = require("../../../models/Proyecto");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyProyectoResolver = class DeleteManyProyectoResolver {
    async deleteManyProyecto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyProyectoArgs_1.DeleteManyProyectoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyProyectoResolver.prototype, "deleteManyProyecto", null);
DeleteManyProyectoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Proyecto_1.Proyecto)
], DeleteManyProyectoResolver);
exports.DeleteManyProyectoResolver = DeleteManyProyectoResolver;
