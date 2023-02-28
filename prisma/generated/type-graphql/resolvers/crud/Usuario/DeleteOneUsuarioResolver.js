"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneUsuarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneUsuarioArgs_1 = require("./args/DeleteOneUsuarioArgs");
const Usuario_1 = require("../../../models/Usuario");
const helpers_1 = require("../../../helpers");
let DeleteOneUsuarioResolver = class DeleteOneUsuarioResolver {
    async deleteOneUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Usuario_1.Usuario, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneUsuarioArgs_1.DeleteOneUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneUsuarioResolver.prototype, "deleteOneUsuario", null);
DeleteOneUsuarioResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], DeleteOneUsuarioResolver);
exports.DeleteOneUsuarioResolver = DeleteOneUsuarioResolver;
