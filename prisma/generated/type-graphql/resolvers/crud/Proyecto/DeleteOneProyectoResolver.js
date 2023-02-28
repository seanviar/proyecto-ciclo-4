"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneProyectoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneProyectoArgs_1 = require("./args/DeleteOneProyectoArgs");
const Proyecto_1 = require("../../../models/Proyecto");
const helpers_1 = require("../../../helpers");
let DeleteOneProyectoResolver = class DeleteOneProyectoResolver {
    async deleteOneProyecto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Proyecto_1.Proyecto, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneProyectoArgs_1.DeleteOneProyectoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneProyectoResolver.prototype, "deleteOneProyecto", null);
DeleteOneProyectoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Proyecto_1.Proyecto)
], DeleteOneProyectoResolver);
exports.DeleteOneProyectoResolver = DeleteOneProyectoResolver;
