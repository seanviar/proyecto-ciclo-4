"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProyectoRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Avance_1 = require("../../../models/Avance");
const Inscripcion_1 = require("../../../models/Inscripcion");
const Proyecto_1 = require("../../../models/Proyecto");
const Usuario_1 = require("../../../models/Usuario");
const ProyectoAvanceArgs_1 = require("./args/ProyectoAvanceArgs");
const ProyectoInscripcionArgs_1 = require("./args/ProyectoInscripcionArgs");
const helpers_1 = require("../../../helpers");
let ProyectoRelationsResolver = class ProyectoRelationsResolver {
    async lider(proyecto, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.findUnique({
            where: {
                id: proyecto.id,
            },
        }).lider({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async avance(proyecto, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.findUnique({
            where: {
                id: proyecto.id,
            },
        }).avance({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async inscripcion(proyecto, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.findUnique({
            where: {
                id: proyecto.id,
            },
        }).inscripcion({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Usuario_1.Usuario, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Proyecto_1.Proyecto, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProyectoRelationsResolver.prototype, "lider", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Avance_1.Avance], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Proyecto_1.Proyecto, Object, Object, ProyectoAvanceArgs_1.ProyectoAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProyectoRelationsResolver.prototype, "avance", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Inscripcion_1.Inscripcion], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Proyecto_1.Proyecto, Object, Object, ProyectoInscripcionArgs_1.ProyectoInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProyectoRelationsResolver.prototype, "inscripcion", null);
ProyectoRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Proyecto_1.Proyecto)
], ProyectoRelationsResolver);
exports.ProyectoRelationsResolver = ProyectoRelationsResolver;
