"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstInscripcionOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstInscripcionOrThrowArgs_1 = require("./args/FindFirstInscripcionOrThrowArgs");
const Inscripcion_1 = require("../../../models/Inscripcion");
const helpers_1 = require("../../../helpers");
let FindFirstInscripcionOrThrowResolver = class FindFirstInscripcionOrThrowResolver {
    async findFirstInscripcionOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstInscripcionOrThrowArgs_1.FindFirstInscripcionOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstInscripcionOrThrowResolver.prototype, "findFirstInscripcionOrThrow", null);
FindFirstInscripcionOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inscripcion_1.Inscripcion)
], FindFirstInscripcionOrThrowResolver);
exports.FindFirstInscripcionOrThrowResolver = FindFirstInscripcionOrThrowResolver;
