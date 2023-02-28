"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAvanceOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstAvanceOrThrowArgs_1 = require("./args/FindFirstAvanceOrThrowArgs");
const Avance_1 = require("../../../models/Avance");
const helpers_1 = require("../../../helpers");
let FindFirstAvanceOrThrowResolver = class FindFirstAvanceOrThrowResolver {
    async findFirstAvanceOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Avance_1.Avance, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAvanceOrThrowArgs_1.FindFirstAvanceOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstAvanceOrThrowResolver.prototype, "findFirstAvanceOrThrow", null);
FindFirstAvanceOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], FindFirstAvanceOrThrowResolver);
exports.FindFirstAvanceOrThrowResolver = FindFirstAvanceOrThrowResolver;
