"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyUsuarioResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyUsuarioArgs_1 = require("./args/CreateManyUsuarioArgs");
const Usuario_1 = require("../../../models/Usuario");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyUsuarioResolver = class CreateManyUsuarioResolver {
    async createManyUsuario(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyUsuarioArgs_1.CreateManyUsuarioArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyUsuarioResolver.prototype, "createManyUsuario", null);
CreateManyUsuarioResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], CreateManyUsuarioResolver);
exports.CreateManyUsuarioResolver = CreateManyUsuarioResolver;
