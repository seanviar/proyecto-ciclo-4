"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueInscripcionOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueInscripcionOrThrowArgs_1 = require("./args/FindUniqueInscripcionOrThrowArgs");
const Inscripcion_1 = require("../../../models/Inscripcion");
const helpers_1 = require("../../../helpers");
let FindUniqueInscripcionOrThrowResolver = class FindUniqueInscripcionOrThrowResolver {
    async getInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Inscripcion_1.Inscripcion, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueInscripcionOrThrowArgs_1.FindUniqueInscripcionOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueInscripcionOrThrowResolver.prototype, "getInscripcion", null);
FindUniqueInscripcionOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inscripcion_1.Inscripcion)
], FindUniqueInscripcionOrThrowResolver);
exports.FindUniqueInscripcionOrThrowResolver = FindUniqueInscripcionOrThrowResolver;
