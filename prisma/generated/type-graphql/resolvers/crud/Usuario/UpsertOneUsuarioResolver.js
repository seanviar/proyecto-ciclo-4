"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneUsuarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneUsuarioArgs_1 = require("./args/UpsertOneUsuarioArgs");
const Usuario_1 = require("../../../models/Usuario");
const helpers_1 = require("../../../helpers");
let UpsertOneUsuarioResolver = class UpsertOneUsuarioResolver {
    async upsertOneUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Usuario_1.Usuario, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneUsuarioArgs_1.UpsertOneUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneUsuarioResolver.prototype, "upsertOneUsuario", null);
UpsertOneUsuarioResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], UpsertOneUsuarioResolver);
exports.UpsertOneUsuarioResolver = UpsertOneUsuarioResolver;
