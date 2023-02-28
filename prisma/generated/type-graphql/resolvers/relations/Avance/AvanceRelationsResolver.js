"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Avance_1 = require("../../../models/Avance");
const Proyecto_1 = require("../../../models/Proyecto");
const Usuario_1 = require("../../../models/Usuario");
const helpers_1 = require("../../../helpers");
let AvanceRelationsResolver = class AvanceRelationsResolver {
    async proyecto(avance, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.findUnique({
            where: {
                id: avance.id,
            },
        }).proyecto({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async estudiante(avance, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.findUnique({
            where: {
                id: avance.id,
            },
        }).estudiante({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Proyecto_1.Proyecto, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Avance_1.Avance, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AvanceRelationsResolver.prototype, "proyecto", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Usuario_1.Usuario, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Avance_1.Avance, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AvanceRelationsResolver.prototype, "estudiante", null);
AvanceRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], AvanceRelationsResolver);
exports.AvanceRelationsResolver = AvanceRelationsResolver;
