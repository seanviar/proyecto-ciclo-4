"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAvanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyAvanceArgs_1 = require("./args/UpdateManyAvanceArgs");
const Avance_1 = require("../../../models/Avance");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyAvanceResolver = class UpdateManyAvanceResolver {
    async updateManyAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAvanceArgs_1.UpdateManyAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyAvanceResolver.prototype, "updateManyAvance", null);
UpdateManyAvanceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], UpdateManyAvanceResolver);
exports.UpdateManyAvanceResolver = UpdateManyAvanceResolver;
