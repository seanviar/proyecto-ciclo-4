"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUsuarioOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstUsuarioOrThrowArgs_1 = require("./args/FindFirstUsuarioOrThrowArgs");
const Usuario_1 = require("../../../models/Usuario");
const helpers_1 = require("../../../helpers");
let FindFirstUsuarioOrThrowResolver = class FindFirstUsuarioOrThrowResolver {
    async findFirstUsuarioOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Usuario_1.Usuario, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUsuarioOrThrowArgs_1.FindFirstUsuarioOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstUsuarioOrThrowResolver.prototype, "findFirstUsuarioOrThrow", null);
FindFirstUsuarioOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], FindFirstUsuarioOrThrowResolver);
exports.FindFirstUsuarioOrThrowResolver = FindFirstUsuarioOrThrowResolver;
