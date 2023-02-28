"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneInscripcionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneInscripcionArgs_1 = require("./args/CreateOneInscripcionArgs");
const Inscripcion_1 = require("../../../models/Inscripcion");
const helpers_1 = require("../../../helpers");
let CreateOneInscripcionResolver = class CreateOneInscripcionResolver {
    async createOneInscripcion(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).inscripcion.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneInscripcionArgs_1.CreateOneInscripcionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneInscripcionResolver.prototype, "createOneInscripcion", null);
CreateOneInscripcionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inscripcion_1.Inscripcion)
], CreateOneInscripcionResolver);
exports.CreateOneInscripcionResolver = CreateOneInscripcionResolver;
