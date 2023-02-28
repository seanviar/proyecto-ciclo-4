"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneUsuarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneUsuarioArgs_1 = require("./args/CreateOneUsuarioArgs");
const Usuario_1 = require("../../../models/Usuario");
const helpers_1 = require("../../../helpers");
let CreateOneUsuarioResolver = class CreateOneUsuarioResolver {
    async createOneUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneUsuarioArgs_1.CreateOneUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneUsuarioResolver.prototype, "createOneUsuario", null);
CreateOneUsuarioResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], CreateOneUsuarioResolver);
exports.CreateOneUsuarioResolver = CreateOneUsuarioResolver;
