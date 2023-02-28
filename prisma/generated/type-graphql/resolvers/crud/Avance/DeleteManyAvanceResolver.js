"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAvanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyAvanceArgs_1 = require("./args/DeleteManyAvanceArgs");
const Avance_1 = require("../../../models/Avance");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyAvanceResolver = class DeleteManyAvanceResolver {
    async deleteManyAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAvanceArgs_1.DeleteManyAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyAvanceResolver.prototype, "deleteManyAvance", null);
DeleteManyAvanceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], DeleteManyAvanceResolver);
exports.DeleteManyAvanceResolver = DeleteManyAvanceResolver;
