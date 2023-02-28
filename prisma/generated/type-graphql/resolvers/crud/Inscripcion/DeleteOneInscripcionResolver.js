"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneInscripcionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneInscripcionArgs_1 = require("./args/DeleteOneInscripcionArgs");
const Inscripcion_1 = require("../../../models/Inscripcion");
const helpers_1 = require("../../../helpers");
let DeleteOneInscripcionResolver = class DeleteOneInscripcionResolver {
    async deleteOneInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Inscripcion_1.Inscripcion, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneInscripcionArgs_1.DeleteOneInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneInscripcionResolver.prototype, "deleteOneInscripcion", null);
DeleteOneInscripcionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inscripcion_1.Inscripcion)
], DeleteOneInscripcionResolver);
exports.DeleteOneInscripcionResolver = DeleteOneInscripcionResolver;
