"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Avance_1 = require("../../../models/Avance");
const Inscripcion_1 = require("../../../models/Inscripcion");
const Proyecto_1 = require("../../../models/Proyecto");
const Usuario_1 = require("../../../models/Usuario");
const UsuarioAvanceArgs_1 = require("./args/UsuarioAvanceArgs");
const UsuarioInscripcionArgs_1 = require("./args/UsuarioInscripcionArgs");
const UsuarioProyectoArgs_1 = require("./args/UsuarioProyectoArgs");
const helpers_1 = require("../../../helpers");
let UsuarioRelationsResolver = class UsuarioRelationsResolver {
    async inscripcion(usuario, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findUnique({
            where: {
                id: usuario.id,
            },
        }).inscripcion({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async proyecto(usuario, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findUnique({
            where: {
                id: usuario.id,
            },
        }).proyecto({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async avance(usuario, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).usuario.findUnique({
            where: {
                id: usuario.id,
            },
        }).avance({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Inscripcion_1.Inscripcion], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Usuario_1.Usuario, Object, Object, UsuarioInscripcionArgs_1.UsuarioInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioRelationsResolver.prototype, "inscripcion", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Proyecto_1.Proyecto], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Usuario_1.Usuario, Object, Object, UsuarioProyectoArgs_1.UsuarioProyectoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioRelationsResolver.prototype, "proyecto", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Avance_1.Avance], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Usuario_1.Usuario, Object, Object, UsuarioAvanceArgs_1.UsuarioAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioRelationsResolver.prototype, "avance", null);
UsuarioRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Usuario_1.Usuario)
], UsuarioRelationsResolver);
exports.UsuarioRelationsResolver = UsuarioRelationsResolver;
