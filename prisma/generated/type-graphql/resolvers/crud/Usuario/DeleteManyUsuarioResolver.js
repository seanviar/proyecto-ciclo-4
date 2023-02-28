"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyUsuarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyUsuarioArgs_1 = require("./args/DeleteManyUsuarioArgs");
const Usuario_1 = require("../../../models/Usuario");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyUsuarioResolver = class DeleteManyUsuarioResolver {
    async deleteManyUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyUsuarioArgs_1.DeleteManyUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyUsuarioResolver.prototype, "deleteManyUsuario", null);
DeleteManyUsuarioResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], DeleteManyUsuarioResolver);
exports.DeleteManyUsuarioResolver = DeleteManyUsuarioResolver;
