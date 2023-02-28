"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAvanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneAvanceArgs_1 = require("./args/UpdateOneAvanceArgs");
const Avance_1 = require("../../../models/Avance");
const helpers_1 = require("../../../helpers");
let UpdateOneAvanceResolver = class UpdateOneAvanceResolver {
    async updateOneAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Avance_1.Avance, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneAvanceArgs_1.UpdateOneAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneAvanceResolver.prototype, "updateOneAvance", null);
UpdateOneAvanceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], UpdateOneAvanceResolver);
exports.UpdateOneAvanceResolver = UpdateOneAvanceResolver;
