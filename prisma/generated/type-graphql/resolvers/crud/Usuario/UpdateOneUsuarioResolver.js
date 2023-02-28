"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneUsuarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneUsuarioArgs_1 = require("./args/UpdateOneUsuarioArgs");
const Usuario_1 = require("../../../models/Usuario");
const helpers_1 = require("../../../helpers");
let UpdateOneUsuarioResolver = class UpdateOneUsuarioResolver {
    async updateOneUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneUsuarioArgs_1.UpdateOneUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneUsuarioResolver.prototype, "updateOneUsuario", null);
UpdateOneUsuarioResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], UpdateOneUsuarioResolver);
exports.UpdateOneUsuarioResolver = UpdateOneUsuarioResolver;
