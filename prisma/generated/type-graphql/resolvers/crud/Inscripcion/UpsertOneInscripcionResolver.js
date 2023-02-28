"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneInscripcionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneInscripcionArgs_1 = require("./args/UpsertOneInscripcionArgs");
const Inscripcion_1 = require("../../../models/Inscripcion");
const helpers_1 = require("../../../helpers");
let UpsertOneInscripcionResolver = class UpsertOneInscripcionResolver {
    async upsertOneInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Inscripcion_1.Inscripcion, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneInscripcionArgs_1.UpsertOneInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneInscripcionResolver.prototype, "upsertOneInscripcion", null);
UpsertOneInscripcionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inscripcion_1.Inscripcion)
], UpsertOneInscripcionResolver);
exports.UpsertOneInscripcionResolver = UpsertOneInscripcionResolver;
