"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProyectoOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueProyectoOrThrowArgs_1 = require("./args/FindUniqueProyectoOrThrowArgs");
const Proyecto_1 = require("../../../models/Proyecto");
const helpers_1 = require("../../../helpers");
let FindUniqueProyectoOrThrowResolver = class FindUniqueProyectoOrThrowResolver {
    async getProyecto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Proyecto_1.Proyecto, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProyectoOrThrowArgs_1.FindUniqueProyectoOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueProyectoOrThrowResolver.prototype, "getProyecto", null);
FindUniqueProyectoOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Proyecto_1.Proyecto)
], FindUniqueProyectoOrThrowResolver);
exports.FindUniqueProyectoOrThrowResolver = FindUniqueProyectoOrThrowResolver;
